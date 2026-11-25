Este Readme explica brevemente cada una de las clases y el funcionamiento final del archivo `compras.js`.

---

## Clases

### 1. `Producto`
Representa cada artículo disponible para la compra con su precio y cantidad seleccionada.
* **Propiedades:**
  * `nombre` (`string`): Nombre del producto.
  * `precio` (`number`): Precio unitario en euros.
  * `cantidad` (`number`): Número de unidades.
* **Métodos:**
  * `calcularTotal()`: Multiplica `precio * cantidad` y devuelve el importe total de ese producto.

### 2. `Carrito`
Gestiona la cesta de la compra donde se almacenan los productos añadidos por el usuario.
* **Propiedades:**
  * `productos` (`Producto[]`): Array que guarda las instancias de `Producto` añadidas.
* **Métodos:**
  * `agregarProducto(producto)`: Añade un nuevo objeto `Producto` al array `productos`.
  * `calcularTotalCarrito()`: Recorre todos los productos del carrito y suma el total de cada uno.
  * `vaciarCarrito()`: Reinicia el array `productos` dejándolo vacío (`[]`).

### 3. `Usuario`
Modela al cliente que realiza la compra y dispone de su propio carrito asociado.
* **Propiedades:**
  * `nombre` (`string`): Nombre del usuario.
  * `correo` (`string`): Correo electrónico del usuario.
  * `carrito` (`Carrito`): Instancia de `Carrito` creada automáticamente al registrar el usuario.
* **Métodos:**
  * `agregarProductoAlCarrito(producto)`: Llama a `this.carrito.agregarProducto(producto)` para añadir un artículo a su cesta.
  * `finalizarCompra()`: Calcula el importe total del carrito, muestra por consola el mensaje con el nombre del usuario y el total en euros, y vacía el carrito.

---

## Funcionamiento final

Al ejecutar el archivo, se realizan los siguientes pasos de prueba:

1. **Creación de productos:** Se instancian dos objetos `Producto`: una **Laptop** (1200 €, 1 unidad) y un **Mouse** (20 €, 2 unidades).
2. **Creación del usuario:** Se instancia un objeto `Usuario` llamado **Juan** (`juan@example.com`), inicializando su carrito vacío.
3. **Añadido al carrito:** Se agregan ambos productos al carrito del usuario mediante `agregarProductoAlCarrito()`.
4. **Cierre de compra:** Se ejecuta `usuario.finalizarCompra()`, que calcula el importe total (**1240 €**), imprime en consola *"Usuario Juan ha realizado una compra por un total de 1240€"* y deja el carrito vacío.
