const articulos = [
    {
        id: 1, 
        nombre: "BERMUDA", 
        precio: 25000
    },
    {
        id: 2, 
        nombre: "PANTALON", 
        precio: 70000
    },
    {
        id: 3, 
        nombre: "REMERA", 
        precio: 20000
    },
    {
        id: 4, 
        nombre: "CAMPERA", 
        precio: 80000
    },
    {
        id: 5, 
        nombre: "CHALECO", 
        precio: 45000
    },
    {
        id: 6, 
        nombre: "GORRA", 
        precio: 15000
    },
    {
        id: 7, 
        nombre: "CINTO", 
        precio: 20000
    },
    {
        id: 8, 
        nombre: "BOLSO", 
        precio: 50000
    }
]

// para recuperar el carrito desde localStorage, o inicializarlo como vacío si es la primera vez:

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const contenedorArticulos = document.getElementById("Tienda");

articulos.forEach(el =>{
    const articulo = document.createElement("div");
    const nombre = document.createElement("h3");
    const precio = document.createElement("p");
    const id = document.createElement("p");
    const botonAgregarAlCarrito = document.createElement("button");

    botonAgregarAlCarrito.className = "botonAgregar"

    botonAgregarAlCarrito.textContent = "Agregar al Carrito"

    botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(el));

    articulo.className = "articulo";

    nombre.innerText = el.nombre;
    precio.innerText = `$${el.precio}`;
    id.innerText = `ID: ${el.id}`;
    
    articulo.appendChild(nombre);
    articulo.appendChild(precio);
    articulo.appendChild(id);
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