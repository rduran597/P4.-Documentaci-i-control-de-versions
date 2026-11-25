
/**
 * Representa un producto con un nombre, precio y cantidad.
 *
 * @class Producto
  */ 
class Producto {
  /**
   * Crea una instancia de Producto.
   * @param {string} nombre - El nombre del producto.
   * @param {number} precio - El precio del producto.
   * @param {number} cantidad - La cantidad del producto.
   */

  constructor(nombre, precio, cantidad) {
    /**
     * @type {string}
     */
    this.nombre = nombre;

    /**
     * @type {number}
     */
    this.precio = precio;

    /**
     * @type {number}
     */
    this.cantidad = cantidad;
  }

 /**
  * Calcula el total del producto multiplicando el precio por la cantidad.
  * @returns {number} - El total del producto.
  */
  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  vaciarCarrito() {
    this.productos = [];
  }
}

class Usuario {
  constructor(nombre, correo) {
    this.nombre = nombre;
    this.correo = correo;
    this.carrito = new Carrito();
  }

  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  finalizarCompra() {
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}


const producto1 = new Producto("Laptop", 1200, 1);
const producto2 = new Producto("Mouse", 20, 2);

const usuario = new Usuario("Juan", "juan@example.com");

usuario.agregarProductoAlCarrito(producto1);
usuario.agregarProductoAlCarrito(producto2);

usuario.finalizarCompra();
