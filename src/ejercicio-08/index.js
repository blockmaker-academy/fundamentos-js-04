class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

   
    get totalPrice() {
        return this.price * this.quantity;
    }

   
    set setQuantity(newQuantity) {
        this.quantity = newQuantity;
    }
}


let product = new Product("Laptop", 1000, 3);


console.log(product.totalPrice);  


product.setQuantity = 5;


console.log(product.totalPrice);
