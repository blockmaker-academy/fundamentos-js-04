// Escribe tu código aquí:
const carro = {
    marca: 'Toyota',
    modelo: 'Celica',
    año: 2022
}

for (let propiedad in carro) {
    console.log(`${propiedad}: ${carro[propiedad]}`)
}

