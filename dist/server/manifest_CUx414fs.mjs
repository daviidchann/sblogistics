import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_C3zh_ldy.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_V-R8Ymon.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/dchan/sb-logistics/","cacheDir":"file:///C:/Users/dchan/sb-logistics/node_modules/.astro/","outDir":"file:///C:/Users/dchan/sb-logistics/dist/","srcDir":"file:///C:/Users/dchan/sb-logistics/src/","publicDir":"file:///C:/Users/dchan/sb-logistics/public/","buildClientDir":"file:///C:/Users/dchan/sb-logistics/dist/client/","buildServerDir":"file:///C:/Users/dchan/sb-logistics/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/register","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/register\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/register.ts","pathname":"/api/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DSUzuiHF.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/dchan/sb-logistics/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/api/register@_@ts":"pages/api/register.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CUx414fs.mjs","C:/Users/dchan/sb-logistics/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DzkMdH6a.mjs","C:/Users/dchan/sb-logistics/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/Users/dchan/sb-logistics/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BxF75Owq.js","C:/Users/dchan/sb-logistics/src/components/Registro.astro?astro&type=script&index=0&lang.ts":"_astro/Registro.astro_astro_type_script_index_0_lang.C4n-KCoX.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/dchan/sb-logistics/src/components/Header.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"menu-toggle\"),n=document.getElementById(\"menu\");t?.addEventListener(\"click\",()=>{const e=n?.classList.toggle(\"open\");t.setAttribute(\"aria-expanded\",String(e))});n?.addEventListener(\"click\",e=>{e.target.closest(\"a\")&&(n.classList.remove(\"open\"),t?.setAttribute(\"aria-expanded\",\"false\"))});"],["C:/Users/dchan/sb-logistics/src/components/Registro.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"registro-form\"),e=document.getElementById(\"form-msg\"),t=document.getElementById(\"btn-registrar\"),i=document.getElementById(\"casillero-resultado\"),u=document.getElementById(\"cas-codigo\"),g=document.getElementById(\"cas-direccion\"),f=document.getElementById(\"cas-datos\"),C=document.getElementById(\"cas-otro\");function s(n){e&&(e.className=\"form-msg error\",e.textContent=n)}o?.addEventListener(\"submit\",async n=>{n.preventDefault(),e.className=\"form-msg\",e.textContent=\"\";const a=o.querySelector(\"#nombre\").value.trim(),c=o.querySelector(\"#email\").value.trim(),d=o.querySelector(\"#telefono\").value.trim(),l=o.querySelector(\"#password\").value,m=o.querySelector('input[name=\"plan\"]:checked')?.value??\"basic\";if(a.length<2)return s(\"Ingresa tu nombre completo.\");if(!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(c))return s(\"Ingresa un correo electrónico válido.\");if(l.length<6)return s(\"La contraseña debe tener al menos 6 caracteres.\");t.disabled=!0,t.textContent=\"Creando tu casillero…\";try{const r=await(await fetch(\"/api/register\",{method:\"POST\",headers:{\"Content-Type\":\"application/x-www-form-urlencoded\"},body:new URLSearchParams({nombre:a,email:c,telefono:d,password:l,plan:m})})).json();if(!r.ok)return t.disabled=!1,t.textContent=\"Crear mi casillero gratis\",s(r.error||\"Hubo un error. Inténtalo de nuevo.\");e.className=\"form-msg success\",e.textContent=\"¡Listo! Tu casillero fue creado. Guarda tus datos:\",u.textContent=r.casillero.codigo,g.textContent=r.casillero.direccion.join(`\n`),f.textContent=`Nombre: ${r.casillero.nombre} · Correo: ${r.casillero.email} · Plan: ${r.casillero.plan}`,i?.classList.remove(\"hidden\"),o?.scrollIntoView({behavior:\"smooth\"}),t.disabled=!1,t.textContent=\"Crear mi casillero gratis\"}catch{t.disabled=!1,t.textContent=\"Crear mi casillero gratis\",s(\"No se pudo conectar. Revisa tu internet e inténtalo de nuevo.\")}});C?.addEventListener(\"click\",n=>{n.preventDefault(),i?.classList.add(\"hidden\"),e.className=\"form-msg\",e.textContent=\"\",o?.reset()});"]],"assets":["/_astro/SBLLogo.CSPADXjl.jpeg","/_astro/index.DSUzuiHF.css"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[{}],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"YnOnw9CVdrugRBIWw7qxYeFLXXvbG85RbrIjFA/gMlo=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\dchan\\sb-logistics\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
