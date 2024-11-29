let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const formularioTarjeta = document.getElementById("formulario");

const divDireccion = document.createElement("div");
divDireccion.className = "grupo-formulario";

const direccionEnvio = document.createElement("label");
direccionEnvio.innerText = "Dirección de Envío";
const inputDireccion = document.createElement("input");
inputDireccion.placeholder = "Ej. Av. Rivadavia 1100";

divDireccion.appendChild(direccionEnvio);
divDireccion.appendChild(inputDireccion);

const divNombre = document.createElement("div");
divNombre.className = "grupo-formulario";

const nombreTarjeta = document.createElement("label");
nombreTarjeta.innerText = "Nombre del titular de la tarjeta";
const inputNombre = document.createElement("input");
inputNombre.placeholder = "Ej. Juan Pérez";

divNombre.appendChild(nombreTarjeta);
divNombre.appendChild(inputNombre);

const divNumero = document.createElement("div");
divNumero.className = "grupo-formulario";

const numeroTarjeta = document.createElement("label");
numeroTarjeta.innerText = "Numero de la tarjeta";
const inputNumero = document.createElement("input");
inputNumero.placeholder = "0000 0000 0000 0000";

divNumero.appendChild(numeroTarjeta);
divNumero.appendChild(inputNumero);

const divFecha = document.createElement("div");
divFecha.className = "grupo-formulario";

const fechaVencimiento = document.createElement("label");
fechaVencimiento.innerText = "Fecha de Vencimiento";
const inputVencimiento = document.createElement("input");
inputVencimiento.placeholder = "MM/AA";

divFecha.appendChild(fechaVencimiento);
divFecha.appendChild(inputVencimiento);

const divCCV = document.createElement("div");
divCCV.className = "grupo-formulario";

const ccv = document.createElement("label");
ccv.innerText = "CCV";
const inputCCV = document.createElement("input");
inputCCV.placeholder = "123";

divCCV.appendChild(ccv);
divCCV.appendChild(inputCCV);

const botonDatos = document.createElement("button")
botonDatos.innerText = "Confirmar Datos"
botonDatos.className = "btn";

botonDatos.addEventListener("click", () => {
    const errores = [];

    if (!inputDireccion.value.trim()) {
        errores.push("El campo 'Dirección de Envío' es obligatorio.");
    }
    if (!inputNombre.value.trim()) {
        errores.push("El campo 'Nombre del titular de la tarjeta' es obligatorio.");
    }
    if (!inputNumero.value.trim()) {
        errores.push("El campo 'Número de la tarjeta' es obligatorio.");
    }
    if (!inputVencimiento.value.trim()) {
        errores.push("El campo 'Fecha de vencimiento' es obligatorio.");
    }
    if (!inputCCV.value.trim()) {
        errores.push("El campo 'CCV' es obligatorio.");
    }

    if (errores.length > 0) {
        Swal.fire({
            title: "Formulario incompleto",
            text: errores.join("\n"),
            icon: "warning"
        });
        return;
    }
    
    const nombre = inputNombre.value;
    const direccion = inputDireccion.value;

    const infoUsuario = {
        nombre: nombre,
        direccion: direccion
    };

    localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario));
        
    Swal.fire({
        title: "Datos Correctos",
        icon: "success"
    }).then(() => {
        window.location.href = "./pago.html";
    });
});

formularioTarjeta.appendChild(divDireccion);
formularioTarjeta.appendChild(divNombre);
formularioTarjeta.appendChild(divNumero);
formularioTarjeta.appendChild(divFecha);
formularioTarjeta.appendChild(divCCV);
formularioTarjeta.appendChild(botonDatos);