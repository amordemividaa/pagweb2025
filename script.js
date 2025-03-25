document.addEventListener("DOMContentLoaded", function () {
//Ejecutando funciones
    document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);

//FUNCIONES

    function validarContrasena(contrasena) {
    // Compara la contraseña con la cadena exacta
        return contrasena === "Luna Valentina Valbuena Barajas" || contrasena === "Luna Valentina Valbuena Barajas ";
    }

    function iniciarSesion(event){
        event.preventDefault()
        var contrasena = document.getElementById("contrasena").value; // Reemplaza "contrasena_login" con el ID real del campo de contraseña
        if (!validarContrasena(contrasena)) {
            alert("No tienes acceso.");
        return;
        }
        if (validarContrasena(contrasena)){
            window.location.href="inicio2.html"
        }
    }
})
