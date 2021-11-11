const formulario = document.querySelector('form');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    formulario.submit()
    formulario.reset();
})