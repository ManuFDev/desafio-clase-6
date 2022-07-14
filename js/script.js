class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        return this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

const carrito = [ ];

while (true) {
    let ingresoProducto = prompt("Ingrese un nombre del producto o escriba ESC para terminar de agregar productos.");
    if (ingresoProducto === "ESC" || ingresoProducto === "esc" || ingresoProducto === "Esc") {
    break;
} else {
    let nombreProducto = ingresoProducto;
    let precioProducto = prompt("Ingrese el precio del producto");
    let productoVendido = false;
    carrito.push(new Producto(nombreProducto, precioProducto, productoVendido));
}
}

for (const productos of carrito) {
    console.log(`Producto: ${productos.nombre}`);
    console.log(`Precio: $${productos.precio}`);
    console.log(`Precio final con IVA: $${productos.sumaIva()}`);
}




























