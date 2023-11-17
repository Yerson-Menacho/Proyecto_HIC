// Clases para redirigir a la página correspondiente
lstClases = [".login-button", ".register-button", ".caritocompra", ".detailProd", ".back-button", ".menu-dash"];

// Redirigir a la página correspondiente por medio de la clase
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(lstClases);

    buttons.forEach(function(button) {
      button.addEventListener("click", function(event) {
        event.preventDefault();
        var page = event.currentTarget.getAttribute('data-url');
        console.log("Redirigiendo a: " + page);
        window.location.href = page;
      });
    });
});

// validar login
function validarLogin() {
  var userBD = "admin@store.com";
  var passBD = "admin123";
  var user = document.getElementById("email").value;
  var pass = document.getElementById("password").value;

  // debe redireccionar al carrito si es usuario, mientras:

  if (user == "" || pass == "") {
    alert("Los campos no pueden estar vacios");
  } else if (user != userBD || pass != passBD) {
    alert("Credenciales incorrectas");
  }else{
    // si es admin redirecciona al dashboard
    window.location.href = "../Coleccion Store Dashboard/index.html";
  }  
}