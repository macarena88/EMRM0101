// color.js
document.addEventListener("DOMContentLoaded", function() {
    const catContainer = document.getElementById("catContainer");
    const colorButton = document.getElementById("colorButton");

    // Arreglo de colores para el fondo del contenedor
    const colores = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"]; // Colores suaves (rosa, verde, azul, amarillo)
    let indiceColor = 0;

    // Cambia el color del fondo del contenedor al hacer clic en el botón
    colorButton.addEventListener("click", function() {
        catContainer.style.backgroundColor = colores[indiceColor];
        indiceColor = (indiceColor + 1) % colores.length; // Cambia al siguiente color
    });
});
