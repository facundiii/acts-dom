const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');
const fondo = document.getElementById('fondo');

function mostrarMensajeBoton(event) {
    alert(`Se presionó el botón: ${event.target.textContent}`);
}

function mostrarMensajeDocumento() {
    alert('Se presionó el fondo del documento.');
}

boton1.addEventListener('click', mostrarMensajeBoton);
boton2.addEventListener('click', mostrarMensajeBoton);
boton3.addEventListener('click', mostrarMensajeBoton);

fondo.addEventListener('click', mostrarMensajeDocumento);
