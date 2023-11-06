// Clases para redirigir a la página correspondiente
lstClases = [".login-button", ".register-button", ".caritocompra", ".detailProd, .back-button"];

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