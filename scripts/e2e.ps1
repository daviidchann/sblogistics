$ErrorActionPreference = 'Stop'
$app = 'C:\Users\dchan\sb-logistics'
$dbPath = "$app\data\test.db"
foreach ($ext in '', '-wal', '-shm') { if (Test-Path "$dbPath$ext") { Remove-Item -Force "$dbPath$ext" } }
$env:DB_PATH = $dbPath
$env:HOST = '127.0.0.1'
$env:PORT = '4326'
$base = 'http://127.0.0.1:4326'

$p = Start-Process -FilePath 'node' -ArgumentList 'dist/server/entry.mjs' -WorkingDirectory $app `
  -RedirectStandardOutput "$app\e2e_out.log" -RedirectStandardError "$app\e2e_err.log" -PassThru

function Post($body, $origin) {
  $args = @('-s', '-X', 'POST', "$base/api/register", '-H', 'Content-Type: application/x-www-form-urlencoded', '--data', $body)
  if ($origin) { $args += @('-H', "Origin: $origin") }
  $raw = & curl.exe @args 2>&1
  return $raw
}

try {
  $ok = $false
  for ($i = 0; $i -lt 20; $i++) {
    Start-Sleep -Milliseconds 500
    try { Invoke-WebRequest -Uri $base -UseBasicParsing -TimeoutSec 2 | Out-Null; $ok = $true; break } catch {}
  }
  if (-not $ok) { throw 'Servidor no arranco a tiempo' }

  Write-Output '== 1) GET / (landing) =='
  $homeStatus = (curl.exe -s -o NUL -w '%{http_code}' $base)
  Write-Output "  status=$homeStatus"

  Write-Output '== 2) Registro nuevo (con Origin correcto) =='
  $body = 'nombre=Maria+Gonzalez&email=maria@test.com&telefono=%2B50760001111&password=secreta123&plan=prime'
  $r1 = Post $body $base
  if ($r1 -match '"ok":true') {
    $j1 = $r1 | ConvertFrom-Json
    Write-Output ("  OK  codigo={0} plan={1}" -f $j1.casillero.codigo, $j1.casillero.plan)
    $j1.casillero.direccion | ForEach-Object { Write-Output "     dir: $_" }
  } else { Write-Output "  FAIL: $r1" }

  Write-Output '== 3) Correo duplicado (espera 409) =='
  $r2 = Post $body $base
  if ($r2 -match '409' -or $r2 -match '"ok":false') { $j2 = $r2 | ConvertFrom-Json; Write-Output ("  OK  - {0}" -f $j2.error) } else { Write-Output "  ??: $r2" }

  Write-Output '== 4) Password corta (espera 400) =='
  $body2 = 'nombre=Juan+Perez&email=juan@test.com&password=ab&plan=basic'
  $r3 = Post $body2 $base
  if ($r3 -match '"ok":false') { $j3 = $r3 | ConvertFrom-Json; Write-Output ("  OK  - {0}" -f $j3.error) } else { Write-Output "  ??: $r3" }

  Write-Output '== 5) Sin Origin (espera 403 CSRF) =='
  $r4 = Post $body $null
  if ($r4 -match '403|forbidden') { Write-Output '  OK  - bloqueado por checkOrigin' } else { Write-Output "  ??: $r4" }

  Write-Output '== 6) Filas en SQLite =='
  $row = & node -e "try { const D = require(process.argv[2] + '/node_modules/better-sqlite3'); const db = new D(process.argv[1], { readonly: true }); const r = db.prepare('SELECT (SELECT COUNT(*) FROM users) u, (SELECT COUNT(*) FROM casilleros) c').get(); console.log('users=' + r.u + ' casilleros=' + r.c); } catch(e) { console.error(e.message); process.exit(1); }" $dbPath $app
  Write-Output "  $row"

  Write-Output '== RESUMEN: 2=casillero creado, 3 y 4 validados, 5=CSRF activo, 6>=1 =='
}
finally {
  if ($p -and -not $p.HasExited) { Stop-Process -Id $p.Id -Force }
}