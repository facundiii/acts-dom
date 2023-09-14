function crearInputs() {
    const cantidad = parseInt(document.getElementById('cantidadInput').value);

    const contenedorInputs = document.getElementById('contenedorInputs');

    contenedorInputs.innerHTML = '';

    for (let i = 0; i < cantidad; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Input ${i + 1}`;
        contenedorInputs.appendChild(input);
    }
}
