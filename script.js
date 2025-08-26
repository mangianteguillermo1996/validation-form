const sumitFunction = (event) => {
    if (!validarFormulario()){
    event.preventDefault() // Prevenir la actualización de la página
    } else {
        event.preventDefault()

        const campo = document.querySelectorAll('input[type="text"], input[type="number"], input[type="email"], select')
        let mensajeAlert ='';

        campo.forEach (elemento => {
            const label = elemento.id.charAt(0).toUpperCase() + elemento.id.slice(1);
            mensajeAlert += `${label}: ${elemento.value} \n`
        })

        alert(mensajeAlert)
      
    }
}



document.getElementById('formulario').addEventListener('submit', sumitFunction) // Escucha el envío del formulario



function validarFormulario () {
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;


    //Valida texto
    camposTexto.forEach(campo =>{ 
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.value.length == ''){
            mostrarError(campo, errorCampo, '¡Este campo es requerido!')
            validacionCorrecta = false
        } else if (campo.value.length > 0 && campo.value.length < 3) {
            mostrarError(campo, errorCampo, '¡Este campo debe tener al menos 3 caracteres!')
            validacionCorrecta = false
        } else {
            ocultarError(campo, errorCampo)
        }
    })

    //Valida correo
    const campoCorreo = document.getElementById('correo')
    let errorEmail = document.getElementById('errorCorreo')

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoCorreo.value)){
        ocultarError(campoCorreo, errorEmail)
    } else {
        mostrarError(campoCorreo, errorEmail, 'Ingrese un correo válido')
        validacionCorrecta = false
    }

    //Valida edad
    const campoEdad = document.getElementById('edad')
    let errorEdad = document.getElementById('errorEdad')

    if (campoEdad.value < 18){
        mostrarError(campoEdad, errorEdad, 'Edad inválida')
        validacionCorrecta = false
    } else {
        ocultarError(campoEdad, errorEdad)
    }

    //Valida actividad
    const campoActividad = document.getElementById('actividad');
    let errorActividad = document.getElementById('errorActividad');

    if (campoActividad.value == ''){
        mostrarError(campoActividad, errorActividad, 'Selecciona una actividad')
        validacionCorrecta = false
    } else {
        ocultarError(campoActividad, errorActividad)
    }

    //Validad nivel de estudio
    const campoNivelEstudio = document.getElementById('nivelEstudio')
    let errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if (campoNivelEstudio.value == ''){
        mostrarError(campoNivelEstudio, errorNivelEstudio, 'Selecciona un nivel de estudio')
        validacionCorrecta = false
    } else {
        ocultarError(campoNivelEstudio, errorNivelEstudio)
    }


    //Valida términos y condiciones
    const campoTerminos = document.getElementById('aceptoTermino')
    let errorTerminos = document.getElementById('errorAceptoTermino')

    if (!campoTerminos.checked){
        mostrarError(campoTerminos, errorTerminos, 'Tenes que aceptar')
        validacionCorrecta = false
    } else {
        ocultarError(campoTerminos, errorTerminos)
    }

    return validacionCorrecta;

}

const mostrarError = (campo, elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
    campo.classList.add("input-error");


}

const ocultarError = (campo, elemento) => {
    elemento.textContent = '';
    elemento.style.visibility = "hidden";
    campo.classList.remove("input-error");
}