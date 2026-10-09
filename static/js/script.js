// =========================================================
// [Fundamentos del Lenguaje / Variables, Tipos y Operadores][cite: 6]
// =========================================================
let contadorLikes = 0; // Variable reasignable
const LIMITE_TIEMPO = 10; // Constante

// Tipos de Datos primarios
let usuario = "Carlos"; // String
let edad = 25; // Number
let esActivo = true; // Boolean

// =========================================================
// [Fundamentos del Lenguaje / Condicionales y Bucles][cite: 6]
// =========================================================

// Función FizzBuzz (Práctica)[cite: 6]
function ejecutarFizzBuzz(limite) {
    console.log("--- Inicio FizzBuzz ---");
    for (let i = 1; i <= limite; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
ejecutarFizzBuzz(15); // Ejecución en consola

// =========================================================
// [Fundamentos del Lenguaje / Arreglos y Objetos][cite: 6, 7]
// =========================================================
let habilidades = ["HTML", "CSS", "JavaScript"]; // Arreglo[cite: 6]
habilidades.push("Bootstrap"); // Operaciones con Arreglos[cite: 6]

// Objetos en JS[cite: 7]
let perfilUsuario = {
    nombre: "Juan Desarrollador",
    rol: "Full Stack",
    seguidores: 120
};

// =========================================================
// [DOM / Seleccionar con querySelector y Modificar HTML/CSS][cite: 7]
// =========================================================

// 1. [DOM / Me Gusta (Core)][cite: 7]
function addLike() {
    contadorLikes++;
    // Seleccionar elemento con querySelector
    const likeDisplay = document.querySelector("#like-count");
    if (likeDisplay) {
        likeDisplay.textContent = contadorLikes; // Modificar HTML[cite: 7]
    }
}

// 2. [JavaScript en el buscador / Concepto this (Esto)][cite: 7]
function toggleFollow(botonElemento) {
    // Uso del 'this' pasado como argumento[cite: 7]
    if (botonElemento.textContent === "Seguir") {
        botonElemento.textContent = "Siguiendo";
        botonElemento.style.backgroundColor = "#27ae60"; // Modificar CSS con JS[cite: 7]
    } else {
        botonElemento.textContent = "Seguir";
        botonElemento.style.backgroundColor = "#2980b9";
    }
}

// 3. [JavaScript en el buscador / Evento Hover][cite: 7]
function handleMouseOver(elemento) {
    elemento.style.backgroundColor = "#f1c40f";
    elemento.style.color = "#000";
    elemento.textContent = "¡Estás haciendo Hover sobre el elemento!";
}

function handleMouseOut(elemento) {
    elemento.style.backgroundColor = "#ecf0f1";
    elemento.style.color = "#333";
    elemento.textContent = "Pasa el ratón sobre este recuadro (Evento Hover)";
}

// =========================================================
// [DOM / Entrada y Cambio (Eventos en Tiempo Real)][cite: 7, 8]
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
    const liveInput = document.querySelector("#live-input");
    const liveOutput = document.querySelector("#live-output");

    if (liveInput && liveOutput) {
        // Escuchar el evento input/cambio[cite: 7, 8]
        liveInput.addEventListener("input", (e) => {
            liveOutput.textContent = e.target.value || "---";
        });
    }

    // =========================================================
    // [DOM / ¡Se acabó el tiempo! & Tiempo Local][cite: 7, 8]
    // =========================================================
    let segundos = 0;
    const timerDisplay = document.querySelector("#timer-seconds");
    const timerAlert = document.querySelector("#timer-alert");

    const intervalo = setInterval(() => {
        segundos++;
        if (timerDisplay) {
            timerDisplay.textContent = segundos;
        }

        // Condición para detener el tiempo[cite: 7]
        if (segundos === LIMITE_TIEMPO) {
            clearInterval(intervalo);
            if (timerAlert) {
                timerAlert.textContent = "¡Se acabó el tiempo! (Límite de 10s alcanzado)";
            }
        }
    }, 1000);
});

// =========================================================
// [Temas Avanzados / API y AJAX (Ejemplo fetch)][cite: 8]
// =========================================================
async function obtenerDatosEjemplo() {
    try {
        // Estructura básica para realizar peticiones AJAX[cite: 8]
        // const response = await fetch('https://api.ejemplo.com/datos');
        // const data = await response.json();
        console.log("Módulo API y AJAX preparado para consumir endpoints externamente.");
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}