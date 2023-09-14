function cambiarEstilo() {
    const select = document.getElementById('estiloLista');
    const listaPaises = document.getElementById('listaPaises');

    const estiloSeleccionado = select.value;

    listaPaises.className = '';

    listaPaises.classList.add(estiloSeleccionado);
}
