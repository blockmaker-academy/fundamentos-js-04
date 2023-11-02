function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}


let product1 = new Product("Laptop", 1000, 10);
let product2 = new Product("Mouse", 25, 50);


console.log(product1);
console.log(product2);

