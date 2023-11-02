// Ejercicio 2: Recorriendo Propiedades con for...in

// Define un objeto car con las propiedades brand, model y year. Asigna valores a estas propiedades y luego muestra la información completa del coche en la consola.
const coche = {
    marca: 'Toyota',
    modelo: 'Camry',
    año: 2022
}

for (let prop in coche) {
    console.log(`${prop}: ${coche[prop]}`)
}
