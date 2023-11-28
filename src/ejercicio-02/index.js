// Escribe tu código aquí:

// EJERCICIO 02 - Recorriendo propiedad con for in
//Definir propiedad
const car = {
    brand: 'Mazda',
    model: 'CX-3',
    year: 2019
}

for (let prop in car){
    console.log(`${prop} : ${car[prop]}`)
}