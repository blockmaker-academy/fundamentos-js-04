// Escribe tu código aquí:
const car ={
    marca: 'Toyota',
    modelo:'Corola',
    año:'2023'
}

for (let prop in car) {
    console.log(prop+': '+car[prop])
}

