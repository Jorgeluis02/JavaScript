document.addEventListener('DOMContentLoaded', function() {
    // Cargar servicios dinámicamente
    var serviciosLista = document.getElementById('servicios-lista');
    var servicios = ['Servicio 1', 'Servicio 2', 'Servicio 3'];
    servicios.forEach(function(servicio) {
        var li = document.createElement('li');
        li.textContent = servicio;
        serviciosLista.appendChild(li);
    });

    // Manejar envío del formulario de contacto
    var formularioContacto = document.getElementById('contacto-formulario');
    formularioContacto.addEventListener('submit', function(event) {
        event.preventDefault();
        var nombre = document.getElementById('nombre').value;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;
        // Aquí puedes enviar los datos del formulario a través de AJAX o realizar otras acciones
        console.log("Nombre:", nombre);
        console.log("Email:", email);
        console.log("Mensaje:", mensaje);
        // Puedes agregar aquí la lógica para enviar los datos del formulario a través de AJAX
        // Por ejemplo:
        // fetch('/ruta-de-tu-api', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({nombre: nombre, email: email, mensaje: mensaje})
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(error => {
        //     console.error('Error:', error);
        // });
    });
});
