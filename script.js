const cursos = document.querySelectorAll(".curso");
cursos.forEach((c) => {
  const boton = c.querySelector(".boton-curso");
  boton.addEventListener("click", () => {
    c.toggleAttribute("activo");
  });
});

function validateForm() {
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;
  let edad = document.getElementById("edad").value;
  let cursos = document.getElementById("cursos").value;
  let errorDiv = document.getElementById("error");

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nombre.trim() == "") {
    errorDiv.innerHTML = "Por favor, ingrese su nombre.";
    return false;
  }

  if (!emailRegex.test(email)) {
    errorDiv.innerHTML = "Por favor, ingrese un correo electrónico válido.";
    return false;
  }

  if (telefono.trim() == "") {
    errorDiv.innerHTML = "Por favor, ingrese su teléfono.";
    return false;
  }

  if (isNaN(edad) || edad < 18) {
    errorDiv.innerHTML = "Por favor, ingrese una edad válida (mayor a 13).";
    return false;
  }

  if (cursos == "") {
    errorDiv.innerHTML = "Por favor, seleccione un curso.";
    return false;
  }

  errorDiv.innerHTML = "";
  return true;
}
