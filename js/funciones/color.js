// color.js
document.getElementById("cambiarColor").addEventListener("click", function() {
    const gatito = document.getElementById("gatito");

    // Función para generar un color hexadecimal aleatorio
    function generarColorAleatorio() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`; // Asegurarse de que tenga 6 dígitos
    }

    // Cambia el color de fondo de la imagen aleatoriamente
    const colorAleatorio = generarColorAleatorio();

    // Cambiar el fondo de la imagen (se puede ajustar como prefieras)
    gatito.style.backgroundColor = colorAleatorio; // Cambia el fondo del elemento que contiene la imagen

    // Asegurarse que la imagen tenga un fondo
    gatito.style.position = "relative"; // Añadir posición relativa para que el fondo funcione
    gatito.style.zIndex = "1"; // Asegúrate de que esté encima de otros elementos
});
