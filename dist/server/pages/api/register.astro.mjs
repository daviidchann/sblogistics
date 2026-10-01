import { randomBytes, scryptSync } from 'node:crypto';
import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
export { renderers } from '../../renderers.mjs';

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}
function generarCodigoCasillero() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[randomBytes(1)[0] % chars.length];
  }
  return `SB-${code}`;
}

const dbPath = process.env.DB_PATH ? path.resolve(process.env.DB_PATH) : path.resolve(process.cwd(), "data", "sb-logistics.db");
fs.mkdirSync(path.dirname(dbPath), { recursive: true });
const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre        TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE,
    telefono      TEXT,
    password_hash TEXT NOT NULL,
    plan          TEXT NOT NULL DEFAULT 'basic',
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS casilleros (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
    codigo     TEXT NOT NULL UNIQUE,
    ciudad     TEXT NOT NULL DEFAULT 'Miami, FL',
    direccion  TEXT NOT NULL,
    activo     INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL DEFAULT (datetime('now'))
  );
`);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function direccionCasillero(codigo) {
  return `SB Logistics — ${codigo}
12600 NW 27th Ave, Suite 210
Miami, FL 33167, USA`;
}
const prerender = false;
async function POST({ request }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: "Solicitud inválida." }, 400);
  }
  const nombre = String(form.get("nombre") ?? "").trim();
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  const telefono = String(form.get("telefono") ?? "").trim();
  const password = String(form.get("password") ?? "");
  const plan = String(form.get("plan") ?? "basic").trim();
  if (!nombre || nombre.length < 2) {
    return json({ ok: false, error: "Ingresa tu nombre completo." }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: "Ingresa un correo electrónico válido." }, 400);
  }
  if (password.length < 6) {
    return json({ ok: false, error: "La contraseña debe tener al menos 6 caracteres." }, 400);
  }
  if (!["basic", "prime", "business"].includes(plan)) {
    return json({ ok: false, error: "Selecciona un plan válido." }, 400);
  }
  const existe = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (existe) {
    return json({ ok: false, error: "Ese correo ya tiene un casillero registrado." }, 409);
  }
  let codigo = generarCodigoCasillero();
  while (db.prepare("SELECT id FROM casilleros WHERE codigo = ?").get(codigo)) {
    codigo = generarCodigoCasillero();
  }
  const crear = db.transaction(() => {
    const info = db.prepare("INSERT INTO users (nombre, email, telefono, password_hash, plan) VALUES (?, ?, ?, ?, ?)").run(nombre, email, telefono, hashPassword(password), plan);
    const userId = Number(info.lastInsertRowid);
    const direccion2 = direccionCasillero(codigo);
    db.prepare(
      "INSERT INTO casilleros (user_id, codigo, direccion) VALUES (?, ?, ?)"
    ).run(userId, codigo, direccion2);
    return { userId, codigo, direccion: direccion2 };
  });
  const { codigo: code, direccion } = crear();
  return json({
    ok: true,
    casillero: {
      codigo: code,
      direccion: direccion.split("\n"),
      nombre,
      email,
      plan
    }
  });
}
function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
