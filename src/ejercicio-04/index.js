// Escribe tu código aquí:
function Product(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }
  
  const product1 = new Product('Laptop', 999.99, 5)
  const product2 = new Product('Phone', 599.99, 10)
  
  console.log(product1)
  console.log(product2)