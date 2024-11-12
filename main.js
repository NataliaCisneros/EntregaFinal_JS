const articulos = [
    {
        id: 1, 
        nombre: "BERMUDA", 
        precio: 25000,
        imagen: "./imagenes/bermuda.jpg",
        cantidad: 1
    },
    {
        id: 2, 
        nombre: "PANTALON", 
        precio: 70000,
        imagen: "./imagenes/pantalon.jpg",
        cantidad: 1
    },
    {
        id: 3, 
        nombre: "REMERA", 
        precio: 20000,
        imagen: "./imagenes/remera.jpg",
        cantidad: 1
    },
    {
        id: 4, 
        nombre: "CAMPERA", 
        precio: 80000,
        imagen: "./imagenes/campera.jpg",
        cantidad: 1
    },
    {
        id: 5, 
        nombre: "CHALECO", 
        precio: 45000,
        imagen: "./imagenes/chaleco.jpg",
        cantidad: 1
    },
    {
        id: 6, 
        nombre: "GORRA", 
        precio: 15000,
        imagen: "./imagenes/gorra.jpg",
        cantidad: 1
    },
    {
        id: 7, 
        nombre: "CINTO", 
        precio: 20000,
        imagen: "./imagenes/cinto.jpg",
        cantidad: 1
    },
    {
        id: 8, 
        nombre: "BOLSO", 
        precio: 50000,
        imagen: "./imagenes/bolso.jpg",
        cantidad: 1
    }
]

// para recuperar el carrito desde localStorage, o inicializarlo como vacío si es la primera vez:

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorArticulos = document.getElementById("Tienda");

articulos.forEach(el =>{
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
    
    // Añadir los elementos al contenedor del artículo
    articulo.appendChild(imagen);
    articulo.appendChild(nombre);
    articulo.appendChild(precio);
    
    articulo.appendChild(botonAgregarAlCarrito);

    contenedorArticulos.appendChild(articulo);
})

// para agregar un artículo al carrito y guardar en localStorage:

function agregarAlCarrito(el) {
    const itemExistente = carrito.find(item => item.id === el.id);
    if (itemExistente) {
       itemExistente.cantidad += 1;
    } else {
        carrito.push({ ...el, cantidad: 1 });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}