
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

/**
 * Clase Usuario que representa a un usuario del sistema de compras.
 * 
 */
class Usuario {
  /**
   * Crea una instancia de Usuario.
   * @param {string} nombre 
   * @param {string} correo 
   */
  constructor(nombre, correo) {
    /**
     * @type {string} nombre del usuario
     */
    this.nombre = nombre;
    /**
     * @type {string} correo del usuario
     */
    this.correo = correo;
    /**
     * @type {Carrito} carrito de compras del usuario
     */
    this.carrito = new Carrito();
  }

  /**
   * 
   * @param {Producto} producto 
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Finaliza la compra del usuario, calculando el total y vaciando el carrito.
   * 
   */
  finalizarCompra() {
    /**
    * Calcula el total de la compra y muestra un mensaje con el total gastado por el usuario.
    */
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
