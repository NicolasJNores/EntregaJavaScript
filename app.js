// Obtener referencias a los elementos HTML
const presupuestoInput = document.getElementById("presupuesto");
const harinaParaPizzaInput = document.getElementById("harinaParaPizza");
const quesoParaPizzaInput = document.getElementById("quesoParaPizza");
const panHamburguesaInput = document.getElementById("panHamburguesa");
const carneHamburguesaInput = document.getElementById("carneHamburguesa");
const resultadoElement = document.getElementById("resultado");

// Verificar si hay datos almacenados en Local Storage y cargarlos
const Datos = localStorage.getItem("costos");
let costos = {
  harinaPizza: 0,
  quesoPizza: 0,
  panHamburguesa: 0,
  carneHamburguesa: 0
};

if (Datos) {
  costos = JSON.parse(Datos);
  harinaParaPizzaInput.value = costos.harinaPizza;
  quesoParaPizzaInput.value = costos.quesoPizza;
  panHamburguesaInput.value = costos.panHamburguesa;
  carneHamburguesaInput.value = costos.carneHamburguesa;
}

// Función para calcular y mostrar el resultado
function calcularCostoTotal() {
  // Obtener los valores de entrada
  const presupuesto = parseInt(presupuestoInput.value);
  const costoHarinaPizza = parseInt(harinaParaPizzaInput.value);
  const costoQuesoPizza = parseInt(quesoParaPizzaInput.value);
  const costoPanHamburguesa = parseInt(panHamburguesaInput.value);
  const costoCarneHamburguesa = parseInt(carneHamburguesaInput.value);

  // Actualizar los costos en el objeto costos
  costos.harinaPizza = costoHarinaPizza;
  costos.quesoPizza = costoQuesoPizza;
  costos.panHamburguesa = costoPanHamburguesa;
  costos.carneHamburguesa = costoCarneHamburguesa;

  // Guardar los costos en Local Storage como JSON
  localStorage.setItem("costos", JSON.stringify(costos));

  // Calcular el costo total de la pizza y la hamburguesa
  const costoTotalPizza = costoHarinaPizza + costoQuesoPizza;
  const costoTotalHamburguesa = costoPanHamburguesa + costoCarneHamburguesa;
  const costoTotalProductos = costoTotalPizza + costoTotalHamburguesa;

  // Mostrar el resultado en el HTML
  if (costoTotalProductos <= presupuesto) {
    const sobrante = presupuesto - costoTotalProductos;
    resultadoElement.textContent = `El costo total de ambos productos es ${costoTotalProductos} y está dentro del presupuesto. Le sobran ${sobrante}.`;
    console.log(`El costo total de la pizza es: ${costoTotalPizza}`);
    console.log(`El costo total de la hamburguesa es: ${costoTotalHamburguesa}`);
    console.log(`El costo total de ambos productos es ${costoTotalProductos} y está dentro del presupuesto. Le sobran ${sobrante}.`);
  } else {
    const excedente = costoTotalProductos - presupuesto;
    resultadoElement.textContent = `El costo total de ambos productos es ${costoTotalProductos} y excede el presupuesto por ${excedente}.`;
    onsole.log(`El costo total de la pizza es: ${costoTotalPizza}`);
    console.log(`El costo total de la hamburguesa es: ${costoTotalHamburguesa}`);
    console.log(`El costo total de ambos productos es ${costoTotalProductos} y excede el presupuesto por ${excedente}.`);
  }
}

// Agregar evento de clic al botón "Calcular"
const btnCalcular = document.getElementById("btn-calcular");
btnCalcular.addEventListener("click", calcularCostoTotal);
