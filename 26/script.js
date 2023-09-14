const miDiv = document.getElementById('miDiv');

window.addEventListener('click', function(event) {
    const x = event.clientX;
    const y = event.clientY;

    miDiv.style.left = x + 'px';
    miDiv.style.top = y + 'px';
});
