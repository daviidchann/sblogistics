import { e as createComponent, g as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, h as createAstro, m as maybeRenderHead, n as renderScript, o as renderComponent } from '../chunks/astro/server_C3zh_ldy.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "SB Logistics | Casillero en Miami y env\xEDos a Panam\xE1",
    description = "Crea tu casillero en Miami y trae tus compras de Estados Unidos a Panam\xE1 r\xE1pido y sin complicaciones. Carga a\xE9rea y mar\xEDtima."
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%230275a4'/%3E%3Ctext x='50' y='68' font-size='48' text-anchor='middle' fill='white' font-family='Arial' font-weight='bold'%3ESB%3C/text%3E%3C/svg%3E"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/dchan/sb-logistics/src/layouts/Layout.astro", void 0);

const logo = new Proxy({"src":"/_astro/SBLLogo.CSPADXjl.jpeg","width":502,"height":135,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/dchan/sb-logistics/src/assets/SBLLogo.jpeg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="site-header"> <div class="container header-inner"> <a href="/" class="logo-sb" aria-label="SB Logistics - Inicio"> <img${addAttribute(logo.src, "src")} alt="SB Logistics logo" class="logo-image"> <!-- <span class="logo-copy">
				SB Logistics
				<small>Casillero Miami</small>
			</span> --> </a> <button class="mobile-toggle" id="menu-toggle" aria-label="Abrir menú" aria-expanded="false">☰</button> <nav class="header-nav" id="menu"> <ul> <li><a href="https://ksdlog.com/seguimiento/">Tracking</a></li> <li><a href="/#servicios">Servicios</a></li> <li><a href="/#tarifas">Tarifas</a></li> <li><a href="/#beneficios">Beneficios</a></li> <li><a href="/#faq">Preguntas frecuentes</a></li> <li><a href="/#contacto">Contacto</a></li> </ul> </nav> <div class="header-acciones"> <a class="btn btn-naranja" href="https://sblogisticsgroup.multitrack.trackingpremium.us/">Crear mi casillero</a> </div> </div> </header> ${renderScript($$result, "C:/Users/dchan/sb-logistics/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/dchan/sb-logistics/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    { value: "+350K", label: "Paquetes entregados" },
    { value: "+65K", label: "Entregas a domicilio" },
    { value: "10K", label: "Usuarios registrados" },
    { value: "6 a\xF1os", label: "De trayectoria" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="hero"> <div class="container hero-inner"> <div class="section-head hero-head" style="text-align:left; margin:0 0 48px;"> <p class="kicker" style="color:var(--celeste);">
SB Logistics · Miami → Panamá
</p> <h2 style="font-size:clamp(30px, 5vw, 52px);">
Comprar en línea nunca fue tan fácil.
</h2> <p>
Trae tus paquetes de Estados Unidos a Panamá rápido y sin
				complicaciones. Crea tu casillero gratis en Miami en menos de 1 minuto.
</p> <div class="hero-acciones" style="display:flex; gap:14px; flex-wrap:wrap; margin-top:28px;"> <a class="btn btn-naranja" href="https://sblogisticsgroup.multitrack.trackingpremium.us/">Crear mi casillero gratis</a> <a class="btn btn-whatsapp" href="https://wa.me/50768168338?text=Hola%2C%20quiero%20info%20sobre%20SB%20Logistics" target="_blank" rel="noopener">WhatsApp</a> </div> </div> <div class="grid-4" style="gap:16px;"> ${stats.map((s) => renderTemplate`<div style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.18); border-radius:16px; padding:22px; backdrop-filter:blur(4px);"> <p style="font-size:26px; font-weight:900; color:#fff;"> ${s.value} </p> <p style="color:rgba(255,255,255,0.85); font-size:14px;"> ${s.label} </p> </div>`)} </div> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/Hero.astro", void 0);

const $$Marcas = createComponent(($$result, $$props, $$slots) => {
  const marcas = ["Amazon", "eBay", "Shein", "Best Buy", "Sephora", "Adidas", "Nike", "Walmart", "Costco", "Home Depot"];
  return renderTemplate`${maybeRenderHead()}<div class="marcas"> <div class="container"> <p>Compra en tus tiendas favoritas de Estados Unidos</p> <div class="marcas-lista"> ${marcas.map((m) => renderTemplate`<span>${m}</span>`)} </div> </div> </div>`;
}, "C:/Users/dchan/sb-logistics/src/components/Marcas.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const servicios = [
    {
      icono: "\u{1F6CD}\uFE0F",
      titulo: "Servicio de compra asistida",
      texto: "\xBFNo sabes comprar o prefieres que alguien lo haga por ti? Verificamos el producto, realizamos la compra en Estados Unidos y te acompa\xF1amos en todo el proceso.",
      enlace: "#contacto"
    },
    {
      icono: "\u2708\uFE0F",
      titulo: "Carga a\xE9rea",
      texto: "La opci\xF3n m\xE1s r\xE1pida para tus compras. Vuelos frecuentes, entregas \xE1giles y seguimiento claro. Cobro por libra real, sin sorpresas.",
      alt: true,
      enlace: "#tarifas"
    },
    {
      icono: "\u{1F6A2}",
      titulo: "Carga mar\xEDtima",
      texto: "La alternativa m\xE1s conveniente para compras grandes. Perfecta para muebles, electrodom\xE9sticos o pedidos por volumen. Ideal cuando no hay apuro.",
      enlace: "#contacto"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="servicios"> <div class="container"> <div class="section-head"> <p class="kicker">Nuestros servicios</p> <h2>Te acompañamos para traer tus compras de <span class="highlight">Estados Unidos a Panamá</span></h2> <p>Tú eliges cómo comprar. Nosotros te ayudamos en cada paso.</p> </div> <div class="grid-3"> ${servicios.map((s) => renderTemplate`<div class="card"> <div${addAttribute("servicio-icono" + (s.alt ? " alt" : ""), "class")}>${s.icono}</div> <h3>${s.titulo}</h3> <p>${s.texto}</p> <a class="link-mas"${addAttribute(s.enlace, "href")}>Ver más detalles →</a> </div>`)} </div> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/Services.astro", void 0);

const $$ComoFunciona = createComponent(($$result, $$props, $$slots) => {
  const pasos = [
    {
      titulo: "Crea tu casillero",
      texto: "Reg\xEDstrate gratis y recibe al instante tu direcci\xF3n y c\xF3digo en Miami, FL."
    },
    {
      titulo: "Compra en tus tiendas",
      texto: "Usa tu direcci\xF3n de SB Logistics como destino en Amazon, Walmart, eBay y m\xE1s."
    },
    {
      titulo: "Recibimos en Miami",
      texto: "Tus paquetes llegan a nuestro almac\xE9n. Te avisamos al instante."
    },
    {
      titulo: "Env\xEDo a Panam\xE1",
      texto: "Los enviamos por aire o mar, y los retiras en sucursal o los recibes en casa."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section style="background:var(--claro);"> <div class="container"> <div class="section-head"> <p class="kicker">Así de fácil</p> <h2>¿Cómo funciona?</h2> <p>Cuatro pasos simples para traer tus compras de Estados Unidos a Panamá.</p> </div> <div class="grid-4 steps"> ${pasos.map((p) => renderTemplate`<div class="step"> <h3>${p.titulo}</h3> <p>${p.texto}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/ComoFunciona.astro", void 0);

const $$Tarifas = createComponent(($$result, $$props, $$slots) => {
  const tarifas = [
    {
      nombre: "Basic",
      precio: "$3.00",
      unidad: "por libra (+ ITBMS)",
      popular: false,
      enlace: "https://sblogisticsgroup.multitrack.trackingpremium.us/",
      etiqueta: "Crear mi casillero",
      items: [
        "Casillero gratis (sin membres\xEDas)",
        "Vuelos frecuentes desde Miami",
        "No cobramos por tama\xF1o del paquete",
        "Web App con seguimiento",
        "Atenci\xF3n personalizada",
        "Seguro de carga"
      ]
    },
    {
      nombre: "Prime",
      precio: "$3.50",
      unidad: "por libra (+ ITBMS)",
      popular: true,
      enlace: "https://sblogisticsgroup.multitrack.trackingpremium.us/",
      etiqueta: "Crear mi casillero",
      items: [
        "Casillero gratis (sin membres\xEDas)",
        "Vuelos frecuentes desde Miami",
        "No cobramos por tama\xF1o del paquete",
        "Web App con seguimiento",
        "Atenci\xF3n personalizada",
        "Seguro de carga",
        "Delivery gratis",
        "Devoluciones gratis"
      ]
    },
    {
      nombre: "Business",
      precio: "$2.75",
      unidad: "por libra (+ ITBMS \xB7 m\xEDn. 50 lb/mes)",
      popular: false,
      enlace: "https://wa.me/50768168338?text=Hola%2C%20quiero%20el%20plan%20Business",
      etiqueta: "Cont\xE1ctanos",
      items: [
        "Casillero empresarial gratis",
        "Vuelos frecuentes desde Miami",
        "No cobramos por tama\xF1o del paquete",
        "Web App con seguimiento",
        "Seguro de carga",
        "Delivery gratis",
        "Ejecutivo de cuenta dedicado"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="tarifas"> <div class="container"> <div class="section-head"> <p class="kicker">Tarifas aéreas</p> <h2>Elige la tarifa que mejor se adapte a ti</h2> <p>
Peso real, sin recargos por volumen. Sin membresías ni cuotas ocultas.
</p> </div> <div class="tarifas-wrap"> ${tarifas.map((t) => renderTemplate`<div${addAttribute("tarifa" + (t.popular ? " popular" : ""), "class")}> ${t.popular && renderTemplate`<span class="badge">Más popular</span>`} <h3>${t.nombre}</h3> <div class="precio"> <span class="monto">${t.precio}</span> <span class="unidad">${t.unidad}</span> </div> <ul> ${t.items.map((item) => renderTemplate`<li>${item}</li>`)} </ul> ${t.enlace.startsWith("http") ? renderTemplate`<a class="btn btn-outline-azul"${addAttribute(t.enlace, "href")} target="_blank" rel="noopener"> ${t.etiqueta} </a>` : renderTemplate`<a class="btn btn-azul"${addAttribute(t.enlace, "href")}> ${t.etiqueta} </a>`} </div>`)} </div> <p class="nota" style="text-align:center; margin-top:22px; font-size:13px; color:var(--gris);">
Aplican términos y condiciones.
</p> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/Tarifas.astro", void 0);

const $$Beneficios = createComponent(($$result, $$props, $$slots) => {
  const beneficios = [
    {
      icono: "\u{1F4AC}",
      titulo: "Atenci\xF3n personalizada",
      texto: "Habla con personas reales. Soporte por WhatsApp para orientarte y dar seguimiento claro a tus env\xEDos."
    },
    {
      icono: "\u{1F3E0}",
      titulo: "Entrega a domicilio",
      texto: "Recibe tus paquetes en casa u oficina dentro del \xE1rea metropolitana. Gratis para usuarios Prime y Business."
    },
    {
      icono: "\u2708\uFE0F",
      titulo: "Vuelos frecuentes desde Miami",
      texto: "Enviamos todos los d\xEDas desde Miami a Panam\xE1, con entregas \xE1giles y flujo constante de paquetes."
    },
    {
      icono: "\u2696\uFE0F",
      titulo: "Peso real, sin volumen",
      texto: "No importa el tama\xF1o de la caja: pagas solo por el peso real del paquete. Sin cobros por volumen ni sorpresas."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="beneficios" style="background:var(--claro);"> <div class="container"> <div class="section-head"> <p class="kicker">Beneficios</p> <h2>Diseñamos nuestro servicio para que compres <span class="highlight">sin complicaciones</span></h2> <p>Claro, acompañado y transparente en cada envío.</p> </div> <div class="grid-4"> ${beneficios.map((b) => renderTemplate`<div class="card beneficio"> <div class="servicio-icono">${b.icono}</div> <h3>${b.titulo}</h3> <p>${b.texto}</p> </div>`)} </div> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/Beneficios.astro", void 0);

const $$Testimonios = createComponent(($$result, $$props, $$slots) => {
  const testimonios = [
    {
      texto: "Con SB Logistics manejamos nuestras compras de forma ordenada y sin estr\xE9s. Cuando necesitamos traer un pedido especial para la tienda, sabemos que llegar\xE1 r\xE1pido y en buen estado.",
      nombre: "Melanie Vargas",
      cargo: "Gerente \u2014 Von Fuster",
      iniciales: "MV"
    },
    {
      texto: "Llevo m\xE1s de tres a\xF1os trabajando con el equipo de SB Logistics y nunca he tenido un solo inconveniente. El servicio es \xE1gil, confiable y el seguimiento siempre es claro.",
      nombre: "Santiago Cuartas",
      cargo: "Abogado Corporativo",
      iniciales: "SC"
    },
    {
      texto: "He probado distintos proveedores y SB Logistics ha sido el m\xE1s consistente. Mis paquetes llegan a tiempo y en buen estado, y la comunicaci\xF3n con el equipo es excelente.",
      nombre: "Manuel Cordovez",
      cargo: "Director \u2014 Airepuro",
      iniciales: "MC"
    },
    {
      texto: "Los paquetes suelen llegar en 1 o 2 d\xEDas. El sistema es pr\xE1ctico y f\xE1cil de usar, y la ubicaci\xF3n permite retirar paquetes r\xE1pido y sin complicaciones.",
      nombre: "Diego De Ycaza",
      cargo: "Co-Founder \u2014 Klarity Pro",
      iniciales: "DD"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="testimonios"> <div class="container"> <div class="section-head"> <p class="kicker">Testimonios</p> <h2>Lo que dicen nuestros clientes</h2> <p>Miles de clientes satisfechos confían en nosotros.</p> </div> <div class="grid-2"> ${testimonios.map((t) => renderTemplate`<div class="testimonio"> <p class="quote">“${t.texto}”</p> <div class="autor"> <div class="avatar">${t.iniciales}</div> <div> <strong>${t.nombre}</strong> <span>${t.cargo}</span> </div> </div> </div>`)} </div> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/Testimonios.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      q: "\xBFC\xF3mo creo mi casillero en SB Logistics?",
      a: "Reg\xEDstrate en el formulario de esta p\xE1gina con tu nombre, correo y tel\xE9fono. En menos de 1 minuto recibir\xE1s tu c\xF3digo de casillero y tu direcci\xF3n en Miami lista para usar."
    },
    {
      q: "\xBFDebo pagar una membres\xEDa o cuota mensual?",
      a: "No. Tu casillero es completamente gratis y sin membres\xEDas. Solo pagas el env\xEDo cuando recibes tus paquetes."
    },
    {
      q: "\xBFCu\xE1nto tarda en llegar mi paquete a Panam\xE1?",
      a: "Por carga a\xE9rea suele llegar en 1 a 3 d\xEDas h\xE1biles desde Miami. Por carga mar\xEDtima, el tiempo depende del volumen, ideal para compras grandes."
    },
    {
      q: "\xBFC\xF3mo se calcula el costo del env\xEDo?",
      a: "Se cobra por libra real (peso f\xEDsico), sin cobros por volumen ni tama\xF1o de caja. La tarifa depende del plan: Basic $3.00, Prime $3.50 o Business $2.75 por libra."
    },
    {
      q: "\xBFPuedo recibir mi paquete en casa?",
      a: "S\xED. Ofrecemos entrega a domicilio dentro del \xE1rea metropolitana. Es gratuita para usuarios Prime y Business."
    },
    {
      q: "\xBFQu\xE9 m\xE9todos de pago aceptan?",
      a: "Aceptamos efectivo, transferencia bancaria, Yappy y tarjeta de d\xE9bito/cr\xE9dito. Cons\xFAltanos por WhatsApp para tu m\xE9todo preferido."
    },
    {
      q: "\xBFQu\xE9 art\xEDculos est\xE1n prohibidos?",
      a: "No se transportan armas, explosivos, drogas, dinero en efectivo ni mercanc\xEDas ilegales. Puedes consultar la lista completa escribi\xE9ndonos."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="faq" style="background:var(--claro);"> <div class="container"> <div class="section-head"> <p class="kicker">Preguntas frecuentes</p> <h2>Respuestas claras a las dudas más comunes</h2> </div> <div class="faq"> ${faqs.map((f) => renderTemplate`<details class="faq-item"> <summary>${f.q}</summary> <div class="faq-body">${f.a}</div> </details>`)} </div> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/Faq.astro", void 0);

const $$Registro = createComponent(async ($$result, $$props, $$slots) => {
  const planes = [
    { valor: "basic", nombre: "Basic", detalle: "$3.00/lb" },
    { valor: "prime", nombre: "Prime", detalle: "$3.50/lb" },
    { valor: "business", nombre: "Business", detalle: "$2.75/lb" }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="registro" class="registro"> <div class="container"> <div class="registro-grid"> <div class="registro-info"> <p class="kicker" style="color:var(--azul); font-weight:800; text-transform:uppercase; letter-spacing:0.08em; font-size:13px;">
Registro
</p> <h2>
Si aún no compras, crea tu <span class="highlight">casillero gratis</span> </h2> <p>
Regístrate ahora y recibe al instante tu casillero personal en Miami,
					FL. Empieza a comprar en tus tiendas favoritas de Estados Unidos hoy
					mismo.
</p> <ul> <li>Casillero gratuito, sin membresías</li> <li>Recibes tu dirección de Miami al registrarte</li> <li>Peso real, sin cobros por volumen</li> <li>Seguimiento claro desde tu plataforma</li> </ul> <div class="direccion-preview"> <div style="font-weight:800; color:var(--azul-oscuro); margin-bottom:6px;">
Tu dirección en Miami (ejemplo)
</div>
SB Logistics — Tu código aquí<br>
12600 NW 27th Ave, Suite 210<br>
Miami, FL 33167, USA
</div> </div> <div> <form class="registro-form" id="registro-form" novalidate> <h3>Crea tu casillero</h3> <p class="sub">
Completa tus datos. Es gratis y toma menos de 1 minuto.
</p> <div class="campo"> <label for="nombre">Nombre completo</label> <input type="text" id="nombre" name="nombre" placeholder="Ej: María González" required> </div> <div class="campo"> <label for="email">Correo electrónico</label> <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required> </div> <div class="campo"> <label for="telefono">Teléfono (WhatsApp)</label> <input type="tel" id="telefono" name="telefono" placeholder="+507 6816-8338"> </div> <div class="campo"> <label for="password">Contraseña</label> <input type="password" id="password" name="password" placeholder="Mínimo 6 caracteres" required minlength="6"> </div> <div class="campo"> <label>Selecciona tu plan</label> <div class="campo-plan"> ${planes.map((p) => renderTemplate`<label> <input type="radio" name="plan"${addAttribute(p.valor, "value")}${addAttribute(p.valor === "basic", "checked")}> ${p.nombre} <small>${p.detalle}</small> </label>`)} </div> </div> <button class="btn btn-naranja" type="submit" style="width:100%;" id="btn-registrar">
Crear mi casillero gratis
</button> <div class="form-msg" id="form-msg" role="status"></div> </form> <div class="casillero-resultado hidden" id="casillero-resultado"> <div class="casillero-card"> <div class="label">¡Bienvenido(a)! Este es tu nuevo casillero</div> <div class="codigo" id="cas-codigo">SB-XXXXXX</div> <div class="label">Dirección de envíos (Miami)</div> <pre id="cas-direccion"></pre> <div class="label" style="margin-bottom:4px;">Tus datos</div> <p style="font-size:14px; opacity:0.9;" id="cas-datos"></p> <a class="btn btn-outline" href="#" style="margin-top:16px;" id="cas-otro">Registrar otro casillero</a> </div> </div> </div> </div> </div> </section> ${renderScript($$result, "C:/Users/dchan/sb-logistics/src/components/Registro.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/dchan/sb-logistics/src/components/Registro.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="contacto"> <div class="container"> <div class="section-head"> <p class="kicker">Contacto</p> <h2>Estamos aquí para ayudarte</h2> <p>Elige el canal que prefieras y te respondemos rápido.</p> </div> <div class="contacto-grid"> <div class="contacto-tarjeta"> <div class="servicio-icono">📍</div> <h3>Visítanos</h3> <p>
Paitilla ,C. Ramon H. Jurado, Panamá, Provincia de Panamá, Supreme
					storage.
</p> <a href="https://www.google.com/maps" target="_blank" rel="noopener">Ver ubicación →</a> </div> <div class="contacto-tarjeta"> <div class="servicio-icono">📞</div> <h3>Llámanos</h3> <p>Atención telefónica directa, de lunes a sábado.</p> <a href="tel:+50768168338">+507 6816-8338</a> </div> <div class="contacto-tarjeta"> <div class="servicio-icono">💬</div> <h3>WhatsApp</h3> <p>Respuesta rápida a tus consultas y seguimiento de envíos.</p> <a href="https://wa.me/50768168338" target="_blank" rel="noopener">Chatear ahora →</a> </div> <div class="contacto-tarjeta"> <div class="servicio-icono">✉️</div> <h3>Correo electrónico</h3> <p>Escríbenos para soporte detallado o temas empresariales.</p> <a href="mailto:ventas@sblogisticsgroup.com">ventas@sblogisticsgroup.com</a> </div> </div> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/Contacto.astro", void 0);

const $$CtaFinal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="cta-final"> <div class="container" style="max-width:760px;"> <h2>Comienza tu experiencia de compras sin fronteras</h2> <p>
Únete a miles de panameños que ya traen sus compras de Estados Unidos con
			SB Logistics.
</p> <a class="btn btn-naranja" href="https://sblogisticsgroup.multitrack.trackingpremium.us/">Crear mi casillero gratis</a> <a class="btn btn-outline" href="https://wa.me/50768168338" target="_blank" rel="noopener">Hablar con un asesor</a> </div> </section>`;
}, "C:/Users/dchan/sb-logistics/src/components/CtaFinal.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class="container"> <div class="footer-grid"> <div> <a href="/" class="logo-sb on-dark"> <img${addAttribute(logo.src, "src")} alt="SB Logistics logo" class="logo-image"> <!-- <span class="logo-copy">
						SB Logistics
						<small>Casillero Miami · Panamá</small>
					</span> --> </a> <p class="footer-desc">
Tu casillero en Estados Unidos, con atención y seguimiento en Panamá.
					Envíos aéreos y marítimos desde Miami.
</p> </div> <div> <h4>Contacto</h4> <ul> <li> <a href="mailto:ventas@sblogisticsgroup.com">ventas@sblogisticsgroup.com</a> </li> <li><a href="tel:+50768168338">+507 6816-8338</a></li> <li> <a href="https://wa.me/50768168338" target="_blank" rel="noopener">Chat WhatsApp</a> </li> </ul> </div> <div> <h4>Enlaces</h4> <ul> <li><a href="/#servicios">Servicios</a></li> <li><a href="/#tarifas">Tarifas</a></li> <li><a href="/#beneficios">Beneficios</a></li> <li><a href="/#faq">Preguntas frecuentes</a></li> <li><a href="/#contacto">Contacto</a></li> </ul> </div> <div> <h4>Legales</h4> <ul> <li><a href="/#contacto">Términos y condiciones</a></li> <li><a href="/#contacto">Política de privacidad</a></li> </ul> </div> </div> <div class="footer-bottom"> <span>© 2026 SB Logistics. Todos los derechos reservados.</span> <div class="footer-social"> <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">f</a> <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">ig</a> <a href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok">t</a> </div> </div> </div> </footer>`;
}, "C:/Users/dchan/sb-logistics/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Marcas", $$Marcas, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "ComoFunciona", $$ComoFunciona, {})} ${renderComponent($$result2, "Tarifas", $$Tarifas, {})} ${renderComponent($$result2, "Beneficios", $$Beneficios, {})} ${renderComponent($$result2, "Testimonios", $$Testimonios, {})} ${renderComponent($$result2, "Faq", $$Faq, {})} ${renderComponent($$result2, "Registro", $$Registro, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} ${renderComponent($$result2, "CtaFinal", $$CtaFinal, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/dchan/sb-logistics/src/pages/index.astro", void 0);

const $$file = "C:/Users/dchan/sb-logistics/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
