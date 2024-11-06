const carritoResultado = JSON.parse(localStorage.getItem("carrito"));

const contenedorCarrito = document.getElementById("CarritoDeCompras");

carritoResultado.forEach(el =>{
    const articulo = document.createElement("div");
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");
    const id = document.createElement("p");
    const cantidad = document.createElement("p");

    articulo.className = "articulo";

    nombre.innerText = el.nombre;
    precio.innerText = `$${el.precio}`;
    id.innerText = `ID: ${el.id}`;
    cantidad.innerText = `Cantidad: ${el.cantidad}`;

    articulo.appendChild(nombre);
    articulo.appendChild(precio);
    articulo.appendChild(id);
    articulo.appendChild(cantidad);

    contenedorCarrito.appendChild(articulo);

})

const contenedorTotal = document.getElementById("Total");
const total = carritoResultado.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad)  ,0);
contenedorTotal.textContent = `TOTAL: $${total}`;



