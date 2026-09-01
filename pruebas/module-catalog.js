// OPAUSTRO - Catalogo unico de modulos, submodulos y accesos clasicos por rol.
// Fuente unica para Login/index.html, Admin/control_usuarios.html y
// Admin/control_modulos.html: para agregar un modulo o submodulo nuevo,
// agregalo AQUI (una sola vez, en MODULE_DEFINITIONS y en el area de
// AREA_GROUPS que corresponda) y aparecera automaticamente en el menu
// del login y en las pantallas de Control de usuarios / Control de modulos,
// sin tener que tocar esos otros archivos.

const MODULE_DEFINITIONS = {
  Admin: {
    label: "Control de accesos",
    icon: "../Recuros_imagenes/usuario.png?v=1.0.0",
    path: "../Admin/informe_accesos.html?embed=1",
    embed: true
  },
  ControlAccesoApp: {
    label: "Informe de accesos",
    symbol: "report",
    icon: "../Recuros_imagenes/reporte.png?v=1.0.0",
    path: "../Admin/informe_accesos.html?embed=1",
    embed: true
  },
  ControlAccesoInforme: {
    label: "Informe de accesos",
    symbol: "report",
    icon: "../Recuros_imagenes/reporte.png?v=1.0.0",
    path: "../Admin/informe_accesos.html?embed=1",
    embed: true
  },
  ControlAccesoAdmin: {
    label: "Administrar accesos",
    symbol: "controls",
    icon: "../Recuros_imagenes/rol.png?v=1.0.0",
    path: "../Admin/administrar_accesos.html?embed=1",
    embed: true
  },
  ControlUsuarios: {
    label: "Control de usuarios",
    symbol: "users",
    icon: "../Recuros_imagenes/usuario.png?v=1.0.0",
    path: "../Admin/control_usuarios.html?embed=1",
    embed: true
  },
  ControlModulos: {
    label: "Control de módulos",
    symbol: "controls",
    icon: "../Recuros_imagenes/rol.png?v=1.0.0",
    path: "../Admin/control_modulos.html?embed=1",
    embed: true
  },
  Ventas: {
    label: "Ventas",
    icon: "../Recuros_imagenes/resumen.png?v=1.0.0",
    path: "../Ventas/modulo_ventas.html?embed=1",
    embed: true
  },
  MapaVentas: {
    label: "Mapa",
    symbol: "map",
    icon: "../Recuros_imagenes/ubicacion.png?v=1.0.0",
    path: "../Ventas/ventas.html?embed=1",
    embed: true
  },
  VentasOperativo: {
    label: "BI Ventas",
    symbol: "chart",
    icon: "../Recuros_imagenes/resumen.png?v=1.0.0",
    path: "../Ventas/bi_ventas.html?embed=1",
    embed: true
  },
  BiVendedor: {
    label: "BI Vendedor",
    symbol: "seller",
    icon: "../Recuros_imagenes/usuario.png?v=1.0.0",
    path: "../Ventas/bi_vendedor.html?embed=1",
    embed: true
  },
  Cartera: {
    label: "BI Cartera",
    symbol: "wallet",
    icon: "../Recuros_imagenes/inventario.png?v=1.0.0",
    path: "../Ventas/bi_cartera.html?embed=1",
    embed: true
  },
  VentasGerencial: {
    label: "BI Gerencial",
    symbol: "board",
    icon: "../Recuros_imagenes/reporte.png?v=1.0.0",
    path: "../Ventas/bi_gerencial.html?embed=1",
    embed: true
  },
  Retorno: {
    label: "BI Devoluciones",
    symbol: "return",
    icon: "../Recuros_imagenes/reporte.png?v=1.0.0",
    path: "../Ventas/bi_retornos.html?embed=1",
    embed: true
  },
  NuevoDia: {
    label: "BI Nuevo Dia",
    symbol: "day",
    icon: "../Recuros_imagenes/calendario.png?v=1.0.0",
    path: "../Ventas/bi_nuevo_dia.html?embed=1",
    embed: true
  },
  Logistica: {
    label: "Logística",
    icon: "../Recuros_imagenes/inventario.png?v=1.0.0",
    description: "Cabinets · Taller · Movimientos",
    path: "../Logistica/cabinets.html?embed=1&v=1.0.0",
    embed: true
  },
  CabinetsBodega: {
    label: "Cabinets en Bodega",
    icon: "../Recuros_imagenes/congelador.svg",
    description: "Consulta de cabinets en Bodega OK",
    path: "../Logistica/cabinets_bodega.html?embed=1",
    embed: true
  },
  Gerencia: {
    label: "Gerencia",
    icon: "../Recuros_imagenes/reporte.png?v=1.0.0",
    path: "../Gerencia/tablero.html?embed=1",
    embed: true
  },
  GerenciaTablero: {
    label: "Tablero Control",
    symbol: "dashboard",
    icon: "../Recuros_imagenes/reporte.png?v=1.0.0",
    path: "../Gerencia/tablero.html?embed=1",
    embed: true
  },
  GerenciaRevision: {
    label: "Revisión Costo",
    symbol: "cost",
    icon: "../Recuros_imagenes/calendario.png?v=1.0.0",
    path: "../Gerencia/revision.html?embed=1",
    embed: true
  },
  IceResumen: {
    label: "Resumen",
    icon: "../Recuros_imagenes/resumen.png?v=1.0.0",
    path: "../ICE_Pinguino/resumen.html?embed=1",
    embed: true
  },
  IceInventario: {
    label: "Inventario",
    icon: "../Recuros_imagenes/inventario.png?v=1.0.0",
    path: "../ICE_Pinguino/inventario.html?embed=1",
    embed: true
  },
  IceReportes: {
    label: "Reportes",
    icon: "../Recuros_imagenes/reporte.png?v=1.0.0",
    path: "../ICE_Pinguino/reportes.html?embed=1",
    embed: true
  },
  IceEscaneo: {
    label: "Escaneo",
    icon: "../Recuros_imagenes/escanear.png?v=1.0.0",
    path: "../ICE_Pinguino/escaneo.html?embed=1",
    embed: true
  },
  IceMisVisitas: {
    label: "Mis visitas",
    icon: "../Recuros_imagenes/resumen.png?v=1.0.0",
    path: "../ICE_Pinguino/mis_visitas.html?embed=1",
    embed: true
  },
  GerenciaFlujo: {
    label: "Flujo Caja",
    symbol: "cash",
    icon: "../Recuros_imagenes/resumen.png?v=1.0.0",
    path: "../Gerencia/flujo-caja-opaustro.html?embed=1",
    embed: true
  },
  GerenciaPrestamos: {
    label: "Préstamos e Inversiones",
    symbol: "loan",
    path: "../Gerencia/prestamo-socios.html?embed=1",
    embed: true
  },
  GerenciaDiasInventario: {
    label: "Días de Inventario",
    symbol: "days",
    path: "../Gerencia/dias-inventario.html?embed=1",
    embed: true
  },
  ExhibidoresVendedor: {
    label: "Exhibidores Vendedor",
    symbol: "exhibidorPhoto",
    path: "../Exhibidores/vendedor.html?embed=1",
    embed: true
  },
  ExhibidoresSupervisor: {
    label: "Exhibidores Supervisor",
    symbol: "exhibidorAudit",
    path: "../Exhibidores/supervisor.html?embed=1",
    embed: true
  },
  ExhibidoresReporte: {
    label: "Exhibidores Reporte",
    symbol: "exhibidorReport",
    path: "../Exhibidores/reporte.html?embed=1",
    embed: true
  },
  ExhibidoresReporteSupervisor: {
    label: "Reporte Exhibidores Supervisor",
    symbol: "exhibidorReport",
    path: "../Exhibidores/reporte.html?embed=1&solo=avance",
    embed: true
  }
};

const SYMBOLS = {
  map: "&#128506;&#65039;",
  chart: "&#128202;",
  wallet: "&#128188;",
  board: "&#128200;",
  return: "&#8617;",
  day: "&#9728;&#65039;",
  dashboard: "&#128200;",
  cost: "&#128176;",
  cash: "&#128181;",
  access: "&#128272;",
  report: "&#128202;",
  controls: "&#9881;&#65039;",
  users: "&#128101;",
  seller: "&#128100;",
  exhibidorPhoto: "&#127980;",
  exhibidorAudit: "&#128221;",
  exhibidorReport: "&#128202;",
  loan: "&#127974;",
  days: "&#128230;"
};

const VENTAS_MODULES = ["MapaVentas", "VentasOperativo", "BiVendedor", "Cartera", "VentasGerencial", "Retorno", "NuevoDia"];
const ADMIN_VENTAS_MODULES = ["VentasOperativo", "BiVendedor", "MapaVentas", "Cartera", "VentasGerencial", "Retorno", "NuevoDia"];
const VENDEDOR_MODULES = ["NuevoDia", "BiVendedor", "Cartera", "Retorno", "MapaVentas"];
const CARTERA_MODULES = ["Cartera"];
const LOGISTICA_MODULES = ["Logistica", "Retorno", "CabinetsBodega"];
const ICE_ADMIN_MODULES = ["IceResumen", "IceInventario", "IceReportes"];
const ICE_OPERATIVO_MODULES = ["IceEscaneo", "IceMisVisitas"];
const GERENCIA_MODULES = ["GerenciaTablero", "GerenciaRevision", "GerenciaFlujo", "GerenciaPrestamos", "GerenciaDiasInventario"];
const ACCESS_CONTROL_MODULES = ["ControlAccesoInforme", "ControlAccesoAdmin", "ControlUsuarios", "ControlModulos"];
const GERENCIA_CONTROL_MODULES = ["ControlAccesoInforme", "ControlModulos"];
const ADMIN_APP_MODULES = [...ACCESS_CONTROL_MODULES];
const GERENCIA_ACCESS_MODULES = [...ADMIN_VENTAS_MODULES, ...LOGISTICA_MODULES, ...GERENCIA_MODULES, ...ICE_ADMIN_MODULES, ...GERENCIA_CONTROL_MODULES];
const ADMIN_GERENCIA_MODULES = [...ADMIN_VENTAS_MODULES, ...LOGISTICA_MODULES, ...GERENCIA_MODULES, ...ICE_ADMIN_MODULES, ...ACCESS_CONTROL_MODULES];

const AREA_GROUPS = [
  {
    id: "ControlAccesos",
    label: "Control de accesos",
    icon: "&#128101;",
    iconPath: "../Recuros_imagenes/usuario.png?v=1.0.0",
    modules: ["ControlAccesoInforme", "ControlAccesoAdmin", "ControlUsuarios", "ControlModulos"]
  },
  {
    id: "Ventas",
    label: "Ventas",
    icon: "&#128200;",
    iconPath: "../Recuros_imagenes/resumen.png?v=1.0.0",
    modules: ["MapaVentas", "VentasOperativo", "BiVendedor", "Cartera", "VentasGerencial", "Retorno", "NuevoDia"]
  },
  {
    id: "Logistica",
    label: "Logística",
    icon: "&#128666;",
    iconPath: "../Recuros_imagenes/inventario.png?v=1.0.0",
    modules: ["Logistica", "CabinetsBodega"]
  },
  {
    id: "Gerencia",
    label: "Gerencia",
    icon: "&#128188;",
    iconPath: "../Recuros_imagenes/reporte.png?v=1.0.0",
    modules: ["GerenciaTablero", "GerenciaRevision", "GerenciaFlujo", "GerenciaPrestamos", "GerenciaDiasInventario"]
  },
  {
    id: "ICE",
    label: "ICE",
    icon: "&#127848;",
    iconPath: "../Recuros_imagenes/pinguino.png?v=1.0.0",
    modules: ["IceResumen", "IceInventario", "IceReportes", "IceEscaneo", "IceMisVisitas"]
  },
  {
    id: "Exhibidores",
    label: "Exhibidores",
    icon: "&#127978;",
    modules: ["ExhibidoresVendedor", "ExhibidoresSupervisor", "ExhibidoresReporte", "ExhibidoresReporteSupervisor"]
  }
];

// Acceso "clasico" por rol (el que ya se ve hoy al iniciar sesion sin
// personalizar nada en Control de modulos). Usado por Login/index.html
// como fallback cuando el rol no tiene fila propia en el sheet de Control
// de modulos, y por Admin/control_modulos.html para precargar los
// checkboxes con lo que ese rol realmente ve.
const CLASSIC_ROLE_MODULES = {
  "ADMIN": ADMIN_GERENCIA_MODULES,
  "ADMINISTRADOR": ADMIN_GERENCIA_MODULES,
  "GERENCIA": GERENCIA_ACCESS_MODULES,
  "GERENTE": GERENCIA_ACCESS_MODULES,
  "LOGISTICA": LOGISTICA_MODULES,
  "TECNICO": ["Logistica"],
  "TECNICO_LOGISTICA": ["Logistica"],
  "SUPERVISOR": VENTAS_MODULES,
  "CARTERA": CARTERA_MODULES,
  "VENDEDOR": VENDEDOR_MODULES,
  "VENTAS": VENDEDOR_MODULES,
  "VENDEDORES_ICE": [...ICE_OPERATIVO_MODULES, ...VENDEDOR_MODULES],
  "VENDEDOR_ICE": [...ICE_OPERATIVO_MODULES, ...VENDEDOR_MODULES],
  "ICE": [...ICE_OPERATIVO_MODULES, ...VENDEDOR_MODULES]
};

function normalizeRoleClassic(role) {
  return String(role || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[\s-]+/g, "_")
    .trim()
    .toUpperCase();
}

function classicModulesForRole(role) {
  return CLASSIC_ROLE_MODULES[normalizeRoleClassic(role)] || [];
}

// Deriva el arbol Area -> [{key,label}] (usado por Admin/control_usuarios.html
// y Admin/control_modulos.html para pintar los checkboxes) directamente de
// AREA_GROUPS + MODULE_DEFINITIONS, para no mantener una tercera copia.
function buildModuleCatalog() {
  return AREA_GROUPS.map((group) => ({
    area: group.label,
    items: group.modules.map((key) => ({
      key,
      label: (MODULE_DEFINITIONS[key] && MODULE_DEFINITIONS[key].label) || key
    }))
  }));
}
