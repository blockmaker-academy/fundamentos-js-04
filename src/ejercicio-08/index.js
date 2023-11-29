class Product {
    constructor(name, price, quantity) {
        this.name = name
        this.price = price
        this._quantityquantity = quantity
    }

    get quantity() {
        return this._quantity
    }
    set quantity(newQuantity) {
        this._quantity = newQuantity
    }
    get totalPrice() {
        return this.price * this._quantity
    }
} 
const product = new Product('Hat', 19.99,2
)
console.log('Total Price:',product.totalPrice)

product.quantity = 5

console.log('Update Total Price:', 
product.totalPrice)