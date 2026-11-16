/*
 * OPAUSTRO - Interruptor "Aplicacion fuera de produccion".
 *
 * La empresa ya trabaja con otra aplicacion. El codigo NO se elimino; solo se bloquea:
 *  - Login/index.html: muestra el aviso al pulsar "Ingresar" y no deja entrar
 *    (incluye este script con data-modo="login"; solo lee el interruptor).
 *  - Paginas de modulos: si alguien las abre por enlace directo, se muestra el aviso
 *    a pantalla completa y el resto de la pagina (scripts, llamadas a Apps Script) no se ejecuta.
 *
 * PARA VOLVER A HABILITAR LA APP: cambiar FUERA_DE_PRODUCCION a false
 * (y subir el ?v= de fuera-de-produccion.js en las paginas para saltar la cache del navegador).
 */
(function () {
  var FUERA_DE_PRODUCCION = true;

  window.OPAUSTRO_FUERA_DE_PRODUCCION = FUERA_DE_PRODUCCION;
  if (!FUERA_DE_PRODUCCION) return;

  var script = document.currentScript;
  if (script && script.getAttribute('data-modo') === 'login') return;

  // Ruta base (raiz de la app) a partir de la ubicacion de este script.
  var base = '';
  try {
    if (script && script.src) base = script.src.replace(/fuera-de-produccion\.js(\?.*)?$/, '');
  } catch (e) {}

  var html =
    '<meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<meta name="robots" content="noindex">' +
    '<title>OPAUSTRO - Fuera de producción</title>' +
    '<style>' +
      'html,body{margin:0;height:100%;}' +
      'body{display:flex;align-items:center;justify-content:center;padding:16px;box-sizing:border-box;' +
        'background:#f3f4f6;color:#1f2937;font-family:system-ui,-apple-system,"Segoe UI",Roboto,Arial,sans-serif;}' +
      '.oc-card{max-width:440px;width:100%;background:#fff;border-radius:16px;padding:32px 24px;text-align:center;' +
        'box-shadow:0 10px 30px rgba(0,0,0,.08);}' +
      '.oc-card img{display:block;width:120px;height:auto;margin:0 auto 16px;}' +
      '.oc-badge{display:inline-block;background:#fee2e2;color:#b91c1c;font-weight:600;font-size:13px;' +
        'padding:4px 12px;border-radius:999px;margin-bottom:12px;}' +
      '.oc-card h1{font-size:22px;margin:0 0 12px;}' +
      '.oc-card p{font-size:15px;line-height:1.5;margin:0 0 8px;color:#4b5563;}' +
      '@media (prefers-color-scheme:dark){body{background:#111827;color:#f3f4f6;}' +
        '.oc-card{background:#1f2937;box-shadow:none;}.oc-card p{color:#d1d5db;}' +
        '.oc-badge{background:#7f1d1d;color:#fecaca;}}' +
    '</style>' +
    '<div class="oc-card">' +
      '<img src="' + base + 'Recuros_imagenes/logo_opaustro.png" alt="OPAUSTRO" onerror="this.style.display=\'none\'">' +
      '<div class="oc-badge">Fuera de producción</div>' +
      '<h1>Esta aplicación ya no está en uso</h1>' +
      '<p>OPAUSTRO ahora trabaja con otra aplicación, por lo que el ingreso a esta app fue deshabilitado.</p>' +
      '<p>Por favor, utilice la nueva aplicación. Si tiene dudas, comuníquese con el área de TI.</p>' +
    '</div>';

  // El <plaintext> oculto hace que el resto del HTML original se trate como texto y no se ejecute.
  document.write(html + '<plaintext style="display:none">');
})();
