class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this.quantity = quantity  
    }

    get totalPrice() {
        return this.price * this.quantity
    }
}
const product = new Product('shirt',
25.99, 3)

console.log('Total Price:',
product.totalPrice)