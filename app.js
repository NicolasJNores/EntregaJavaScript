// Obtener referencias a los elementos HTML
const presupuestoInput = document.getElementById("presupuesto");
const harinaParaPizzaInput = document.getElementById("harinaParaPizza");
const quesoParaPizzaInput = document.getElementById("quesoParaPizza");
const panHamburguesaInput = document.getElementById("panHamburguesa");
const carneHamburguesaInput = document.getElementById("carneHamburguesa");
const resultadoElement = document.getElementById("resultado");

// Función para verificar si hay datos en el Local Storage
function hayDatosLocalStorage() {
  return localStorage.getItem("Costos") !== null;
}

// Función para obtener el último key numérico en el Local Storage
function obtenerUltimoNumeroKeyLocalStorage() {
  const keys = Object.keys(localStorage);
  const numerosKeys = keys.map(key => parseInt(key.slice(6))).filter(num => !isNaN(num));
  return Math.max(0, ...numerosKeys);
}

// Función para generar el nombre del nuevo key consecutivo
function generarNuevoNombreKey() {
  const ultimoNumero = obtenerUltimoNumeroKeyLocalStorage();
  const nuevoNumero = ultimoNumero + 1;
  return `Costos${nuevoNumero}`;
}

// Verificar si hay datos almacenados en Local Storage
const hayDatos = hayDatosLocalStorage();

// Definir el nombre del key para guardar los costos en Local Storage
let keyLocalStorage = hayDatos ? generarNuevoNombreKey() : "Costos";

// Objeto para almacenar los costos
const costos = {
  pizza: {
    ingredientes: [
      { nombre: "harina", costo: 0 },
      { nombre: "queso", costo: 0 }
    ]
  },
  hamburguesa: {
    ingredientes: [
      { nombre: "pan", costo: 0 },
      { nombre: "carne", costo: 0 }
    ]
  }
};

// Función para actualizar los valores de los input
function actualizarValoresInput() {
  harinaParaPizzaInput.value = costos.pizza.ingredientes[0].costo;
  quesoParaPizzaInput.value = costos.pizza.ingredientes[1].costo;
  panHamburguesaInput.value = costos.hamburguesa.ingredientes[0].costo;
  carneHamburguesaInput.value = costos.hamburguesa.ingredientes[1].costo;
}

// Función para guardar los costos en Local Storage
function guardarCostos() {
  localStorage.setItem(keyLocalStorage, JSON.stringify(costos));
}

// Restablecer los valores de los inputs y generar nuevo key consecutivo
function limpiarInputs() {
  presupuestoInput.value = "";
  harinaParaPizzaInput.value = "";
  quesoParaPizzaInput.value = "";
  panHamburguesaInput.value = "";
  carneHamburguesaInput.value = "";
  resultadoElement.textContent = "";
  keyLocalStorage = generarNuevoNombreKey();
}

// Función para calcular y mostrar el resultado
function calcularCostoTotal() {
  // Obtener los valores de entrada
  const presupuesto = parseInt(presupuestoInput.value);
  const costoHarinaPizza = parseInt(harinaParaPizzaInput.value);
  const costoQuesoPizza = parseInt(quesoParaPizzaInput.value);
  const costoPanHamburguesa = parseInt(panHamburguesaInput.value);
  const costoCarneHamburguesa = parseInt(carneHamburguesaInput.value);

  // Actualizar los costos
  costos.pizza.ingredientes[0].costo = costoHarinaPizza;
  costos.pizza.ingredientes[1].costo = costoQuesoPizza;
  costos.hamburguesa.ingredientes[0].costo = costoPanHamburguesa;
  costos.hamburguesa.ingredientes[1].costo = costoCarneHamburguesa;

  // Guardar los costos en Local Storage
  guardarCostos();

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
    console.log(`El costo total de la pizza es: ${costoTotalPizza}`);
    console.log(`El costo total de la hamburguesa es: ${costoTotalHamburguesa}`);
    console.log(`El costo total de ambos productos es ${costoTotalProductos} y excede el presupuesto por ${excedente}.`);
  }
}

// Agregar evento de clic al botón "Calcular"
const btnCalcular = document.getElementById("btn-calcular");
btnCalcular.addEventListener("click", () => {
  calcularCostoTotal();
  guardarCostos();
});

// Agregar evento de clic al botón "Nuevo Cálculo"
const btnNuevoCalculo = document.getElementById("btn-nuevo-calculo");
btnNuevoCalculo.addEventListener("click", () => {
  limpiarInputs();
});

// Agregar evento de clic al botón "Limpiar"
const btnLimpiar = document.getElementById("btn-limpiar");
btnLimpiar.addEventListener("click", () => {
  limpiarInputs();
  localStorage.clear();
});

// Limpiar los valores de los inputs al cargar la página
window.addEventListener("load", limpiarInputs);
