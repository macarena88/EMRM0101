// temas.js

// Mensaje para verificar que el archivo se carga
console.log("temas.js se ha cargado correctamente.");

// Variable para determinar el estado del tema
let isDarkTheme = false;

// Función para alternar el tema
function toggleTheme() {
    isDarkTheme = !isDarkTheme; // Alterna el valor
    document.body.className = isDarkTheme ? "dark-theme" : "light-theme"; // Cambia la clase del body
}

// Ejemplo: añadir un evento a un botón (debes añadir este botón en tu HTML)
const toggleButton = document.getElementById("toggleThemeButton");
if (toggleButton) {
    toggleButton.addEventListener("click", toggleTheme);
}


