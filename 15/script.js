const coloresOriginales = {
    botonVerde: 'green',
    botonRojo: 'red',
    botonAzul: 'blue',
};

function cambiarColor(boton) {
    const colorAleatorio = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    boton.dataset.colorOriginal = boton.style.backgroundColor;
    boton.style.backgroundColor = colorAleatorio;
}

function restaurarColores() {
    for (const botonId in coloresOriginales) {
        const boton = document.getElementById(botonId);
        boton.style.backgroundColor = coloresOriginales[botonId];
    }
}
