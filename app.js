//  Precios unitarios por producto
const precios = {
  medialunas: 700,
  panmasamadre: 1200,
  facturas: 500,
  tortas: 2500,
  panintegral: 900,
  prepizzas: 1500
};

//  Función genérica para mostrar el total
function calcularTotal(producto) {
  const precioUnitario = precios[producto];
  const cantidad = prompt(`¿Cuántas unidades de ${producto} querés comprar?`);
  
  if (cantidad !== null && !isNaN(cantidad) && cantidad > 0) {
    const total = precioUnitario * parseInt(cantidad);
    alert(`Total por ${cantidad} ${producto}: $${total}`);
  } else {
    alert("Por favor, ingresá una cantidad válida.");
  }
}

//  Funciones específicas por producto
function mostrarMedialunas() {
  calcularTotal("medialunas");
}

function mostrarPanMasamadre() {
  calcularTotal("panmasamadre");
}

function mostrarFacturas() {
  calcularTotal("facturas");
}

function mostrarTortas() {
  calcularTotal("tortas");
}

function mostrarPanIntegral() {
  calcularTotal("panintegral");
}

function mostrarPrepizzas() {
  calcularTotal("prepizzas");
}