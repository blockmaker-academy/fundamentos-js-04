const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: '2023'
}

for (let prop in car) {
    console.log(`${prop}:  ${car[prop]}`)
}