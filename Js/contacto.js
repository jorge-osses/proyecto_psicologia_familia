var form = document.getElementById("my-form");
const divMensaje = document.createElement('p');
divMensaje.classList.add('success', 'hidden');
divMensaje.setAttribute("id", "my-form-status");

    async function handleSubmit(event) {
      event.preventDefault();
      document.querySelector('form').insertBefore(divMensaje, null);

      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.classList.remove('hidden');
        status.innerHTML = "Gracias por contactarte, el mensaje ah sido enviado!";
        form.reset()
        setTimeout(() => {
            status.remove();
        },4000)
      }).catch(error => {
        status.innerHTML = "Uuups! Hubo un problema para enviar tu mensaje =(";
      });
    }
    form.addEventListener("submit", handleSubmit)