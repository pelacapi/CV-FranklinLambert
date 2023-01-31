
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const enviar = document.getElementById('enviar');
const formulario1 =document.getElementById('formulario1');

formulario1.addEventListener('change', function() {
    if (nombre.value && email.value) {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;    
    }
})

