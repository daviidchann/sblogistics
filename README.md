# SB Logistics

Landing page + registro de usuarios con creación de casillero en Miami.
Basado en Astro (SSR con adaptador Node) y SQLite para el almacenamiento.

## Stack

- **Astro 5** (output `server`) + `@astrojs/node` (standalone)
- **better-sqlite3** — base de datos local
- CSS puro (sin framework), fuentes de Google Fonts, HTML sin imágenes externas

## Requisitos

- Node.js 22+
- npm

## Instalación y ejecución

```bash
npm install
npm run dev      # http://localhost:4321
```

Build de producción:

```bash
npm run build
npm run preview  # sirve el build localmente
```

Para servir el build standalone (como en un VPS):

```bash
node dist/server/entry.mjs
```

Variables de entorno:

| Variable   | Uso                                        | Default                       |
| ---------- | ------------------------------------------ | ----------------------------- |
| `DB_PATH`  | Ruta del archivo SQLite                    | `./data/sb-logistics.db`      |
| `HOST`     | Host del servidor standalone               | configuración del adapter     |
| `PORT`     | Puerto del servidor standalone             | `8080`                        |

## Pruebas

```bash
powershell -ExecutionPolicy Bypass -File scripts/e2e.ps1
```

Levanta el servidor standalone, registra un usuario, verifica la validación
(correo duplicado, contraseña corta), la protección CSRF y las filas en SQLite.

## Estructura

```
src/
  pages/
    index.astro          # Landing completo
    api/register.ts      # POST /api/register (crea usuario + casillero)
  components/            # Secciones del landing (Hero, Servicios, Tarifas,
                         #   Registro, FAQ, Contacto, Footer, …)
  lib/
    db.ts                # Conexión y esquema SQLite
    auth.ts              # Hash de contraseñas (scrypt) y generación de código
  styles/global.css      # Tokens de diseño y estilos
scripts/
  e2e.ps1                # Prueba end-to-end del registro
```

## Base de datos recomendada: SQLite

Para este proyecto elegí **SQLite** mediante `better-sqlite3`:

- **Cero infraestructura**: es un archivo local; ideal para un MVP o landing con
  uno o pocos servidores. Sin servicios externos, sin costo, sin configuración.
- **Rápido de iterar**: el esquema se crea solo al iniciar (`src/lib/db.ts`).
- **Transacciones**: `better-sqlite3` es síncrono y soporta transacciones para
  garantizar que usuario y casillero se crean juntos.
- **Listo para migrar**: consultas simples `INSERT/SELECT`; si el negocio crece
  se migra a PostgreSQL/Supabase sin reescribir la lógica.

Esquema:

```sql
CREATE TABLE users (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre        TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,
  telefono      TEXT,
  password_hash TEXT NOT NULL,
  plan          TEXT NOT NULL DEFAULT 'basic',
  created_at    TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE casilleros (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id    INTEGER NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  codigo     TEXT NOT NULL UNIQUE,
  ciudad     TEXT NOT NULL DEFAULT 'Miami, FL',
  direccion  TEXT NOT NULL,
  activo     INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
```

### Cuándo cambiar de base de datos

Migra a **Supabase (PostgreSQL)** o **PostgreSQL + Drizzle/Prisma** cuando:

- Necesites autenticación administrada (ya trae login, sesiones, resets).
- Esperes múltiples servidores/regiones (SQLite es de un solo proceso).
- Necesites consultas complejas o dashboard en tiempo real.

En ese caso `src/lib/db.ts` y `src/pages/api/register.ts` son los únicos
archivos que necesitan cambios.

## Seguridad

- Contraseñas con **scrypt** (salt por usuario) en `src/lib/auth.ts`.
- **CSRF**: Astro compara el header `Origin` con el host real
  (`security.allowedDomains: [{}]` corrige una regresión de Astro 5.17+ que
  forzaba `localhost` y rompía el `checkOrigin`; ver withastro/astro#15660).
- Validación del lado del servidor en el endpoint (formato email, longitud de
  contraseña, plan permitido, email único).
- Código de casillero único tipo `SB-XXXXXX` con caracteres no ambiguos.