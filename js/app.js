
const APP_NOMBRE = "Mi app";
const APP_VERSION = "1.0.0";
const ANIO = "2025";

let contadorVisitas = 0;
let usuarioActivo = "";
let esMovil = false;


function sumar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

const btnSumar = document.getElementById("btnSumar");
const btnMultiplicar = document.getElementById("btnMultiplicar");

if (btnSumar && btnMultiplicar) {
    btnSumar.addEventListener("click", () => {
        const a = parseFloat(document.getElementById("numA").value);
        const b = parseFloat(document.getElementById("numB").value);
        document.getElementById("resultadoOperacion").innerText =
            `Resultado de sumar: ${sumar(a, b)}`;
    });

    btnMultiplicar.addEventListener("click", () => {
        const a = parseFloat(document.getElementById("numA").value);
        const b = parseFloat(document.getElementById("numB").value);
        document.getElementById("resultadoOperacion").innerText =
            `Resultado de multiplicar: ${multiplicar(a, b)}`;
    });
}


let salida = document.getElementById("salida");
if(salida) {
    salida.innerText = `Bienvenido a ${APP_NOMBRE} v${APP_VERSION} - ${ANIO}`;
}

let totalVisitasElem = document.getElementById("totalVisitas");
if (localStorage.getItem("visitas")) {
    contadorVisitas = parseInt(localStorage.getItem("visitas"));
    if (totalVisitasElem) {
        totalVisitasElem.innerText = contadorVisitas;
    }
}

let visitar = document.getElementById("btnVisitas");
if (visitar) {
    visitar.addEventListener("click", function () {
        contadorVisitas++;
        if (totalVisitasElem) totalVisitasElem.innerText = contadorVisitas;
        localStorage.setItem("visitas", contadorVisitas);
    });
}


function mostrarHora() {
    let ahora = new Date();
    let horas = ahora.getHours();
    let sufijo = horas >= 12 ? "PM" : "AM";
    horas = horas % 12;
    if (horas === 0) horas = 12;
    if (horas < 10) horas = "0" + horas;
    let minutos = ahora.getMinutes();
    if (minutos < 10) minutos = "0" + minutos;
    let segundos = ahora.getSeconds();
    if (segundos < 10) segundos = "0" + segundos;
    let mostrarHoraCompleta = horas + ":" + minutos + ":" + segundos + " " + sufijo;

    let reloj = document.getElementById("reloj");
    if (reloj) {
        reloj.innerText = mostrarHoraCompleta;
    }
}
setInterval(mostrarHora, 1000);

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav a[data-page]');
    let path = window.location.pathname.split('/').pop();
    if (!path) path = 'index.html';
    let base = path.split('.').shift();
    const currentPage = base;

    navLinks.forEach(link => {
        if (link.dataset.page === currentPage) {
            link.classList.add('activo');
        } else {
            link.classList.remove('activo');
        }
    });
});

let btnRojo = document.getElementById("btnRojo");
let btnVerde = document.getElementById("btnVerde");
let btnAzul = document.getElementById("btnAzul");
let btnReset = document.getElementById("btnReset");

if (btnRojo && btnVerde && btnAzul && btnReset) {
    btnRojo.addEventListener("click", function () {
        document.body.style.backgroundColor = "red";
    });
    btnVerde.addEventListener("click", function () {
        document.body.style.backgroundColor = "green";
    });
    btnAzul.addEventListener("click", function () {
        document.body.style.backgroundColor = "blue";
    });
    btnReset.addEventListener("click", function () {
        document.body.style.backgroundColor = "";
    });
}

let notaInput = document.getElementById("notaInput");
let btnAgregarNota = document.getElementById("btnAgregarNota");
let listaNotas = document.getElementById("listaNotas");
let mensajeError = document.getElementById("mensajeError");

if (btnAgregarNota && notaInput && listaNotas && mensajeError) {
    btnAgregarNota.addEventListener("click", function () {
        if (notaInput.value.trim() == "") {
            mensajeError.innerText = "La nota no puede estar vacía";
        } else {
            let nuevaNota = document.createElement("li");
            nuevaNota.innerText = notaInput.value;

            nuevaNota.addEventListener("click", function () {
                listaNotas.removeChild(nuevaNota);
            });

            listaNotas.appendChild(nuevaNota);

            notaInput.value = "";
            mensajeError.innerText = "";
        }
    });
}

let formContacto = document.getElementById("formContacto");
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");
let errores = document.getElementById("errores");

if (formContacto) {
    formContacto.addEventListener("submit", function (event) {
        event.preventDefault();
        let mensajesError = [];

        if (nombre.value.trim() === "") {
            mensajesError.push("El nombre es obligatorio.");
        }

        if (email.value.trim() === "") {
            mensajesError.push("El email es obligatorio.");
        } else if (!email.value.includes("@")) {
            mensajesError.push("El email no es válido.");
        }

        if (mensaje.value.trim() === "") {
            mensajesError.push("El mensaje no puede estar vacío.");
        }

        if (mensajesError.length > 0) {
            errores.innerText = mensajesError.join("\n");
        } else {
            errores.innerText = "";
            if (mensajesError.length > 0) {
                errores.innerText = mensajesError.join("\n");
                errores.style.color = "red";
            } else {
                errores.innerText = "✅ Mensaje enviado con éxito.";
                errores.style.color = "green";
                errores.style.marginLeft = "1%"
                nombre.value = "";
                email.value = "";
                mensaje.value = "";
            }
        }
    });
}

let buscador = document.getElementById("buscador");
let listaServicios = document.getElementById("listaServicios");

if (buscador) {
    buscador.addEventListener("keyup", function () {
        let filtro = buscador.value.toLowerCase();
        let items = listaServicios.getElementsByTagName("li");

        for (let i = 0; i < items.length; i++) {
            let texto = items[i].innerText.toLowerCase();
            if (texto.includes(filtro)) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
            }
        }
    });
}

function evaluarNumero(n) {
    if (n > 0) {
        return "El número es positivo";
    } else if (n < 0) {
        return "El número es negativo";
    } else {
        return "El número es cero";
    }
}

let btnEvaluar = document.getElementById("btnEvaluar");
let numeroInput = document.getElementById("numeroInput");
let resultadoNumero = document.getElementById("resultadoNumero");

if (btnEvaluar) { 
    btnEvaluar.addEventListener("click", function () {
        let numero = parseInt(numeroInput.value);
        if (isNaN(numero)) {
            resultadoNumero.innerText = "Por favor ingresa un número válido";
        } else {
            resultadoNumero.innerText = evaluarNumero(numero);
        }
    });
}

function obtenerDia(numero) {
    let dia;
    switch (numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Número no válido (usa 1-7)";
    }
    return dia;
}

let btnDia = document.getElementById("btnDia");
let diaInput = document.getElementById("diaInput");
let resultadoDia = document.getElementById("resultadoDia");

if (btnDia) {
    btnDia.addEventListener("click", function () {
        let numero = parseInt(diaInput.value);
        if (isNaN(numero)) {
            resultadoDia.innerText = "Por favor ingresa un número válido";
        } else {
            resultadoDia.innerText = obtenerDia(numero);
        }
    });
}

let perfil = document.getElementById("perfil");

if (perfil) {
    let perfilNombre = "Keith";
    let edad = 19;
    let profesion = "Desarrollador Web";
    let descripcion = "Apasionado por la tecnología y el aprendizaje constante.";

    let perfilHTML = `
        <h2>${perfilNombre}</h2>
        <p><strong>Edad:</strong> ${edad}</p>
        <p><strong>Profesión:</strong> ${profesion}</p>
        <p>${descripcion}</p>
    `;

    perfil.innerHTML = perfilHTML;
}


class Util {
    static formatearMoneda(valor) {
        return new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP"
        }).format(valor);
    }
}

let btnFormatear = document.getElementById("btnFormatear");
let montoInput = document.getElementById("montoInput");
let resultadoMoneda = document.getElementById("resultadoMoneda");

if (btnFormatear) {
    btnFormatear.addEventListener("click", function () {
        let monto = parseFloat(montoInput.value);
        if (isNaN(monto)) {
            resultadoMoneda.innerText = "Por favor ingresa un número válido";
        } else {
            resultadoMoneda.innerText = Util.formatearMoneda(monto);
        }
    });
}

