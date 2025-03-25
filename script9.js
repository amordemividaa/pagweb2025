// Obtén una referencia al elemento main usando su id
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
    "clips.html",
    "clips2.html",
    "clips3.html",
    "clips4.html",
    "clips5.html",
    "clips6.html",
    "clips7.html" ,
    "clips8.html",
    "clips9.html",
    "clips10.html",
    "clips11.html",
    "clips12.html",
    "clips13.html",
    "clips14.html",
    "clips15.html",
    "clips16.html",
    "clips17.html",
    "clips18.html",
    "clips19.html",
    "clips20.html",
    "clips21.html",
    "clips22.html",
    "clips23.html",
    "clips24.html",
    "clips25.html",
    "clips26.html",
    "clips27.html",
    "clips28.html",
    "clips29.html",
    "clips30.html",
    "clips31.html",
    "clips32.html",
    "clips33.html",
    "clips34.html",
    "clips35.html",
    "clips36.html",
    "clips37.html",
    "clips38.html",
    "clips39.html",
    "clips40.html",
    "clips41.html",
    "clips42.html",
    "clips43.html",
    "clips44.html",
    "clips45.html",
    "clips46.html",
    "clips47.html"

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
