import { hashPassword, generarCodigoCasillero } from '../../lib/auth';
import db from '../../lib/db';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function direccionCasillero(codigo: string): string {
  return `SB Logistics — ${codigo}\n12600 NW 27th Ave, Suite 210\nMiami, FL 33167, USA`;
}

export const prerender = false;

export async function POST({ request }: { request: Request }) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: 'Solicitud inválida.' }, 400);
  }

  const nombre = String(form.get('nombre') ?? '').trim();
  const email = String(form.get('email') ?? '').trim().toLowerCase();
  const telefono = String(form.get('telefono') ?? '').trim();
  const password = String(form.get('password') ?? '');
  const plan = String(form.get('plan') ?? 'basic').trim();

  if (!nombre || nombre.length < 2) {
    return json({ ok: false, error: 'Ingresa tu nombre completo.' }, 400);
  }
  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: 'Ingresa un correo electrónico válido.' }, 400);
  }
  if (password.length < 6) {
    return json({ ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' }, 400);
  }
  if (!['basic', 'prime', 'business'].includes(plan)) {
    return json({ ok: false, error: 'Selecciona un plan válido.' }, 400);
  }

  const existe = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existe) {
    return json({ ok: false, error: 'Ese correo ya tiene un casillero registrado.' }, 409);
  }

  let codigo = generarCodigoCasillero();
  while (db.prepare('SELECT id FROM casilleros WHERE codigo = ?').get(codigo)) {
    codigo = generarCodigoCasillero();
  }

  const crear = db.transaction(() => {
    const info = db
      .prepare('INSERT INTO users (nombre, email, telefono, password_hash, plan) VALUES (?, ?, ?, ?, ?)')
      .run(nombre, email, telefono, hashPassword(password), plan);
    const userId = Number(info.lastInsertRowid);

    const direccion = direccionCasillero(codigo);
    db.prepare(
      'INSERT INTO casilleros (user_id, codigo, direccion) VALUES (?, ?, ?)'
    ).run(userId, codigo, direccion);

    return { userId, codigo, direccion };
  });

  const { codigo: code, direccion } = crear();

  return json({
    ok: true,
    casillero: {
      codigo: code,
      direccion: direccion.split('\n'),
      nombre,
      email,
      plan
    }
  });
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' }
  });
}