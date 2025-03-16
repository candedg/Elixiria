(() => {
    'use strict';

    // Expresión regular para validar emails
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Expresión regular para validar solo letras
    const regexLetras = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;

    // Validación personalizada por campo, toma como parámetro el campo que se va a validar y el tipo de validación a aplicar (regex letras o mail)
    function validarCampo(campo, validador) {
        // Si no pasa la validación
        if (!validador(campo.value.trim())) {
            //   campo.setCustomValidity(mensajeError);
            campo.classList.remove("is-valid");
            campo.classList.add("is-invalid");
        } else {
            //   campo.setCustomValidity("");
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
        }
    }

    // Validar nombre/asunto (solo letras)
    //   Función que usa la expresión regular regexLetras para verificar si un valor contiene solo letras y espacios.
    const validarTexto = (valor) => regexLetras.test(valor);

    // Validar email (usando regex)
    //   Función que usa la expresión regular regexEmail para verificar si un valor tiene el formato de correo electrónico válido.
    const validarEmail = (valor) => regexEmail.test(valor);

    // Función para mostrar una alerta en la interfaz del usuario con un mensaje personalizado.
    function mostrarAlerta(mensaje, tipo) {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
        const alertHTML = `
      <div class="alert alert-${tipo} alert-dismissible" role="alert">
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
        alertPlaceholder.innerHTML = alertHTML;
    }

    // Asignar eventos de validación en tiempo real
    //  Se asegura de que el código se ejecute solo después de que el contenido del DOM esté completamente cargado.
    document.addEventListener('DOMContentLoaded', () => {
        const nombre = document.querySelector("#nombre-usuario");
        const asunto = document.querySelector("#asunto-mensaje");
        const email = document.querySelector("#email-usuario");
        const mensaje = document.querySelector("#mensaje");
        const form = document.querySelector('.needs-validation');

        // Eventos para validar en tiempo real
        // Se agregan eventos input a cada campo.
        // Cada vez que el usuario escribe en un campo, se valida el valor y se muestra el estado de validez en tiempo real.
        nombre.addEventListener("input", () => validarCampo(nombre, validarTexto));
        asunto.addEventListener("input", () => validarCampo(asunto, validarTexto));
        mensaje.addEventListener("input", () => validarCampo(mensaje, validarTexto));
        email.addEventListener("input", () => validarCampo(email, validarEmail));

        form.addEventListener('submit', (event) => {
            // Validar todos los campos antes de enviar
            validarCampo(nombre, validarTexto);
            validarCampo(asunto, validarTexto);
            validarCampo(mensaje, validarTexto);
            validarCampo(email, validarEmail);

            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault(); // Detenemos la recarga para que se pueda ver la alerta
                mostrarAlerta("El formulario fue enviado correctamente.", "success");
            }

            form.classList.add('was-validated');
        }, false);
    });
})();

