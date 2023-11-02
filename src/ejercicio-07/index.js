class Product {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

   
    get totalPrice() {
        return this.price * this.quantity;
    }
}


let product = new Product("Laptop", 1000, 3);


console.log(product.totalPrice); 
