const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: '2022'
}

for (let prop in car) {
    console.log(`${prop}:  ${car[prop]}`)
}