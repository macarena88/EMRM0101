// color.js

// Array de colores para cambiar la imagen del gato
const colores = ["red", "green", "blue", "yellow"];
let colorIndex = 0; // Índice para el color actual

// Función para cambiar el color de la imagen
function cambiarColor() {
    const catImage = document.getElementById("catImage");

    // Cambia la imagen en función del índice de color
    catImage.style.filter = `hue-rotate(${colorIndex * 90}deg)`; // Cambiar color de la imagen

    // Avanza al siguiente color
    colorIndex = (colorIndex + 1) % colores.length; 
}

// Asignar el evento de clic al botón
document.getElementById("colorButton").addEventListener("click", cambiarColor);
