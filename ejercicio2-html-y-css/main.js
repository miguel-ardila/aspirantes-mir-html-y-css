//funionalidad del ojo en la contraseña de ocultar y mostrar 
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var toggleBtn = document.querySelector(".toggle-password");
  
    if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleBtn.classList.remove("fa-eye-slash");
      toggleBtn.classList.add("fa-eye");
    } else {
      passwordField.type = "password";
      toggleBtn.classList.remove("fa-eye");
      toggleBtn.classList.add("fa-eye-slash");
    }
  }
  
  