const contenedorArticulos = document.getElementById("Tienda");

try {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    fetch("../data/articulos.JSON")
    .then(response => response.json())
    .then(data => {

        data.forEach(el =>{
            const articulo = document.createElement("div");
            const imagen = document.createElement("img");
            const nombre = document.createElement("h3");
            const precio = document.createElement("p");
            
            const botonAgregarAlCarrito = document.createElement("button");

            botonAgregarAlCarrito.className = "boton"

            botonAgregarAlCarrito.textContent = "Agregar al Carrito"

            botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(el));

            articulo.className = "articulo";

            nombre.innerText = el.nombre;
            precio.innerText = `$${el.precio}`;
            imagen.src = el.imagen;
            imagen.alt = el.nombre;
            
            articulo.appendChild(imagen);
            articulo.appendChild(nombre);
            articulo.appendChild(precio);
            
            articulo.appendChild(botonAgregarAlCarrito);

            contenedorArticulos.appendChild(articulo);
        })

        function agregarAlCarrito(el) {
            const itemExistente = carrito.find(item => item.id === el.id);
            if (itemExistente) {
            itemExistente.cantidad += 1;
            } else {
                carrito.push({ ...el, cantidad: 1 });
            }
            localStorage.setItem("carrito", JSON.stringify(carrito));
        }
    })
} catch (error) {
    Swal.fire({
        title: "ERROR AL CARGAR LOS DATOS",
        icon: "warning"
    });
}