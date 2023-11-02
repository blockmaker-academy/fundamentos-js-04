// Ejercicio 4: Creación de Constructor de Objetos

// Crea un constructor de objetos llamado Product que tenga propiedades como name, price y quantity. Luego, crea dos instancias de Product con diferentes valores y muestra sus detalles.
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre
    this.precio = precio
    this.cantidad = cantidad
}

const producto1 = new Producto('Laptop', 999.99, 5)
const producto2 = new Producto('Phone', 599.99, 10)

console.log(producto1)
// Resultado:
// Producto { nombre: 'Laptop', precio: 999.99, cantidad: 5 }
console.log(producto2)
// Resultado:
// Producto { nombre: 'Phone', precio: 599.99, cantidad: 10 }