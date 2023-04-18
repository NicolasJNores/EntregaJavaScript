// Mensaje de entrada
alert("Bienvenido al analisis de costos de los productos para el restaurant")

// Pedir al usuario el presupuesto total
const presupuesto = parseInt(prompt("Ingrese su presupuesto total"));

// Pedir al usuario el costo de las variables de pizza
const costoHarinaPizza = parseInt(prompt("Ingrese el costo de la harina para la pizza"));
const costoQuesoPizza = parseInt(prompt("Ingrese el costo del queso para la pizza"));

// Calcular el costo total de la pizza
const costoTotalPizza = costoHarinaPizza + costoQuesoPizza;

// Pedir al usuario el costo de las variables de hamburguesa
const costoPanHamburguesa = parseInt(prompt("Ingrese el costo del pan de hamburguesa"));
const costoCarneHamburguesa = parseInt(prompt("Ingrese el costo de la carne para la hamburguesa"));

// Calcular el costo total de la hamburguesa
const costoTotalHamburguesa = costoPanHamburguesa + costoCarneHamburguesa;

// Calcular el costo total de ambos productos
const costoTotalProductos = costoTotalPizza + costoTotalHamburguesa;

// Mostrar el costo total de cada producto en consola
console.log("El costo total de la pizza es: " + costoTotalPizza);
console.log("El costo total de la hamburguesa es: " + costoTotalHamburguesa);

// Verificar si el costo total de ambos productos está dentro del presupuesto
if (costoTotalProductos <= presupuesto) {
    const sobrante = presupuesto - costoTotalProductos
  console.log("El costo total de ambos productos es " + costoTotalProductos + " y está dentro del presupuesto. Le sobran " + sobrante + ".");
  alert("El costo total de ambos productos es " + costoTotalProductos + " y está dentro del presupuesto. Le sobran " + sobrante + ".");
} else {
    const excedente = costoTotalProductos - presupuesto;
  console.log("El costo total de ambos productos es " + costoTotalProductos + " y excede el presupuesto por " + excedente + ".");
  alert("El costo total de ambos productos es " + costoTotalProductos + " y excede el presupuesto por "+ excedente +".");
}
