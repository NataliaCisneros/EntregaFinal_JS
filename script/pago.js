const carritoResultado = JSON.parse(localStorage.getItem("carrito"));

const infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"));

const contenedorLista = document.getElementById("listaPagar");

const contenedorBotones = document.getElementById("botones");

const nombre = document.createElement("h3");

const direccion = document.createElement("h3");

nombre.innerText = `NOMBRE: ${infoUsuario.nombre}`
direccion.innerText = `DIRECION: ${infoUsuario.direccion}`

contenedorLista.appendChild(nombre);
contenedorLista.appendChild(direccion);

carritoResultado.forEach((el)=>{
    const articulo = document.createElement("div");
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");
    
    articulo.className = "articulo-lista";

    nombre.innerText = `${el.nombre} X ${el.cantidad}`;
    precio.innerText = `$${el.precio * el.cantidad}`;
    
    articulo.appendChild(nombre);
    articulo.appendChild(precio);

    contenedorLista.appendChild(articulo);
})

const contenedorTotal = document.getElementById("totalLista");
const total = carritoResultado.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad)  ,0);
contenedorTotal.textContent = `TOTAL: $${total}`;

const botonVolver = document.createElement("button");
botonVolver.innerText = "VOLVER";
botonVolver.className = "boton";

botonVolver.addEventListener("click", () => {
    window.location.href = "../pages/tarjeta.html";
})

contenedorBotones.appendChild(botonVolver);

const botonDatos = document.createElement("button");
botonDatos.innerText = "CONFIRMAR PAGO";
botonDatos.className = "boton";

botonDatos.addEventListener("click", () => {
    Swal.fire({
        title: "PAGO REALIZADO",
        text: "GRACIAS POR ELEGIRNOS!",
        icon: "success"
    }).then(() => {
        carritoResultado.length = 0;
        localStorage.setItem("carrito", JSON.stringify(carritoResultado));
        let infoUsuario = {};
        localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario));
        window.location.href = "../index.html";
    });
});

contenedorBotones.appendChild(botonDatos);