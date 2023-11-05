// Escribe tu código aquí:
class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    calculateArea() {
        return this.width * this.height
    }
}
class Square extends Rectangle {
    constructor(sideLength) {
        super(sideLength, sideLength)
    }
}

const square = new Square(7)

console.log('Area del cuadrado:', square.calculateArea())

