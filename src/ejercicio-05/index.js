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

const rectangle = new Rectangle(5,10)

console.log('Area: ', rectangle.calculateArea())
