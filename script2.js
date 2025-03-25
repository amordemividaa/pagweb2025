// Obtén una referencia al elemento main usando su id
var mainElement = document.getElementById("mainContent");
var fotoxElement = document.querySelector(".fotox");
var fotobarElement = document.querySelector(".fotobar");
var headerElement = document.getElementById("headerContent")
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
})
document.getElementById("siguiente").addEventListener('click', abrirSiguientePagina);

var paginas = [
    "cancion2.html",
    "cancion2.html"
];

var contadorPagina = localStorage.getItem("contadorPagina") || 0;
console.log(contadorPagina);

function abrirSiguientePagina() {
    // Verifica que haya más páginas por abrir
    if (contadorPagina < paginas.length){
        (contadorPagina++);
        window.open(paginas[contadorPagina], "_self");
        localStorage.setItem("contadorPagina", contadorPagina);
        console.log(contadorPagina)
    } else {
        alert("Ya se han abierto todas las páginas.");
    }
}
window.contadorPagina = contadorPagina;
window.onload = function(){
    contadorPagina = 0;
    localStorage.setItem("contadorPagina", contadorPagina);
}
document.getElementById('mostrarBoton').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'flex';
    mainElement.classList.add("opacidad");
    headerElement.classList.add("opacidad2")
    disablePageInteraction();
});
document.getElementById('cerrarBoton').addEventListener('click', function() {
    enablePageInteraction();
    document.querySelector('.popup').style.display = 'none';
    mainElement.classList.remove("opacidad");
    headerElement.classList.remove("opacidad2");
});
function disablePageInteraction() {
    var interactiveElements = mainElement.querySelectorAll('a, button, input, select, textarea');
    interactiveElements.forEach(function (element) {
        element.setAttribute('disabled', 'true');
    });
    
    // Desactivar los enlaces dentro de mainElement
    // Desactivar también los enlaces dentro del headerElement
    var linksInHeader = headerElement.querySelectorAll('a, button, input, select, textarea');
    linksInHeader.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar la acción predeterminada del enlace
        });
    });
}
// Definir la función preventDefaultAction
function preventDefaultAction(event) {
    event.preventDefault();
}
function enablePageInteraction() {
    var interactiveElements = mainElement.querySelectorAll('a, button, input, select, textarea');
    // Habilitar cada elemento
    interactiveElements.forEach(function (element) {
        element.removeAttribute('disabled');
    });

    // Eliminar los eventListeners de los enlaces dentro de headerElement
    var linksInHeader = headerElement.querySelectorAll('a, button, input, select, textarea');
    linksInHeader.forEach(function (link) {
        var clonedLink = link.cloneNode(true);  // Clonar el enlace
        link.parentNode.replaceChild(clonedLink, link);  // Reemplazar el enlace clonado por el original
    });
}

