const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const boton3 = document.getElementById('boton3');

function cambiarColorFondo() {
    document.body.style.backgroundColor = 'lightblue';
}

function mostrarMensaje(event) {
    let mensaje = '';
    if (event.target === boton1) {
        mensaje = 'Se presionó el Botón 1';
    } else if (event.target === boton2) {
        mensaje = 'Se presionó el Botón 2';
    } else if (event.target === boton3) {
        mensaje = 'Se presionó el Botón 3';
    }
    alert(mensaje);
}

boton1.addEventListener('click', mostrarMensaje, false);
boton2.addEventListener('click', mostrarMensaje, false);
boton3.addEventListener('click', mostrarMensaje, false);
document.addEventListener('click', cambiarColorFondo, false);
