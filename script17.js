// Obtén una referencia al elemento main usando su id
var mainElement = document.getElementById("mainContent");
var fotoxElement = document.querySelector(".fotox");
var fotobarElement = document.querySelector(".fotobar");

// Agrega un evento de clic a un botón (puedes adaptar esto según tu estructura HTML)
document.getElementById("check").addEventListener("change", function() {
    // Verifica si el checkbox está marcado
    if (this.checked) {
        // Agrega una clase al main cuando el checkbox está marcado
        mainElement.classList.add("blurry");
        fotobarElement.style.display = "none";
        // Muestra la imagen con la clase "fotox"
        fotoxElement.style.display = "block"; // o el valor que desees
        // Oculta la imagen con la clase "fotobar"
        fotobarElement.style.opacity = "0"; // Cambia la opacidad para ocultar la imagen
        // Muestra la imagen con la clase "fotox"
        fotoxElement.style.opacity = "1"; // Cambia la opacidad para mostrar la imagen
    } else {
        // Elimina la clase cuando el checkbox no está marcado
        mainElement.classList.remove("blurry");
        fotobarElement.style.display = "block"; // o el valor que desees
        // Oculta la imagen con la clase "fotox"
        fotoxElement.style.display = "none";
        fotobarElement.style.opacity = "1"; // Cambia la opacidad para mostrar la imagen
        // Oculta la imagen con la clase "fotox"
        fotoxElement.style.opacity = "0"; // Cambia la opacidad para ocultar la imagen
    }
});

document.getElementById("anterior").addEventListener('click', volver);
document.getElementById("siguiente").addEventListener('click', abrirSiguientePagina)

var paginas = [
    "menlar.html",
    "menlar2.html",
    "menlar3.html",
    "menlar4.html"
    // ... agregar las demás páginas aquí
];

var contadorPagina = localStorage.getItem("contadorPagina") || 1;
console.log(window.contadorPagina)
function abrirSiguientePagina() {
    // Verifica que haya más páginas por abrir
    if (contadorPagina < paginas.length) {
        (contadorPagina++) + 1;
        window.open(paginas[contadorPagina], "_self");
        localStorage.setItem("contadorPagina", contadorPagina);
    } else {
        alert("Ya se han abierto todas las páginas.");
    }
}
console.log(contadorPagina);
function volver(){
    if (contadorPagina > 0){
        contadorPagina--;
        window.open(paginas[contadorPagina], "_self");
        localStorage.setItem("contadorPagina", contadorPagina);
        console.log(contadorPagina)
    } else {
        alert("No hay páginas anteriores");
    }
}
console.log(contadorPagina);
