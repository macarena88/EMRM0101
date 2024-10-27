// Selecciona el botón por su ID
const colorButton = document.getElementById("colorButton");

// Arreglo de colores
const colores = ["red", "green", "blue", "orange", "purple"]; // Agrega los colores que desees
let indiceColor = 0; // Índice para rastrear el color actual

// Función para cambiar el color del botón
colorButton.addEventListener("click", function() {
    // Cambia el color de fondo del botón al siguiente en el arreglo
    colorButton.style.backgroundColor = colores[indiceColor];

    // Incrementa el índice y reinicia si se excede el tamaño del arreglo
    indiceColor = (indiceColor + 1) % colores.length;
});
