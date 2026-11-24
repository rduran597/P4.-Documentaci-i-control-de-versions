class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularTotal() {
    return this.precio * this.cantidad;
  }
}


/**
 *  Gestiona el carrito de compras de un usuario, permitiendo agregar productos, calcular el total y vaciar el carrito.
 *
 * @class Carrito
 */
class Carrito {
  /**
   * Crea una instancia de Carrito.
   * Inicializa un array vacío de productos.
   */
  constructor() {
    /**
     * @type {Producto[]}
     */
    this.productos = [];
  }


  /**
   * Agrega un producto al carrito.
   * @param {Producto} producto - El producto a agregar.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el total del carrito.
   * @returns {number} El total del carrito.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Vacía el carrito eliminando todos los productos.
   * @returns {void}
   */
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
