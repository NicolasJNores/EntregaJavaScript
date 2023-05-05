// Mensaje de entrada
alert("Bienvenido al analisis de costos de los productos para el restaurant")

// Pedir al usuario el presupuesto total
const presupuesto = parseInt(prompt("Ingrese su presupuesto total"));

// Crear un array de ingredientes y sus costos
const ingredientes = [
  { nombre: "harina para pizza", costo: 0 },
  { nombre: "queso para pizza", costo: 0 },
  { nombre: "pan de hamburguesa", costo: 0 },
  { nombre: "carne para hamburguesa", costo: 0 }
];

// Pedir al usuario el costo de cada ingrediente
ingredientes.forEach(function(ingrediente) {
  ingrediente.costo = parseInt(prompt(`Ingrese el costo de ${ingrediente.nombre}`));
});

// Calcular el costo total de la pizza
const costoTotalPizza = ingredientes[0].costo + ingredientes[1].costo;

// Calcular el costo total de la hamburguesa
const costoTotalHamburguesa = ingredientes[2].costo + ingredientes[3].costo;

// Calcular el costo total de ambos productos
const costoTotalProductos = costoTotalPizza + costoTotalHamburguesa;

// Mostrar el costo total de cada producto en consola
console.log(`El costo total de la pizza es: ${costoTotalPizza}`);
console.log(`El costo total de la hamburguesa es: ${costoTotalHamburguesa}`);

// Verificar si el costo total de ambos productos está dentro del presupuesto
if (costoTotalProductos <= presupuesto) {
    const sobrante = presupuesto - costoTotalProductos;
  console.log(`El costo total de ambos productos es ${costoTotalProductos} y está dentro del presupuesto. Le sobran ${sobrante}.`);
  alert(`El costo total de ambos productos es ${costoTotalProductos} y está dentro del presupuesto. Le sobran ${sobrante}.`);
} else {
    const excedente = costoTotalProductos - presupuesto;
  console.log(`El costo total de ambos productos es ${costoTotalProductos} y excede el presupuesto por ${excedente}.`);
  alert(`El costo total de ambos productos es ${costoTotalProductos} y excede el presupuesto por ${excedente}.`);
}



