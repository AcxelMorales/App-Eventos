'use strict';

const eventBrite = new EventBrite();
const ui = new Interfaz();

document.getElementById('buscarBtn').addEventListener('click', e => {

    e.preventDefault();

    // leer los textos de los inputs
    const textoBuscador = document.getElementById('evento').value;

    const categorias = document.getElementById('listado-categorias');
    const categoria = categorias.options[categorias.selectedIndex].value;

    if (textoBuscador !== '') {
        eventBrite.getEventos(textoBuscador, categoria)
        .then(resp => {
            if (resp.events.length > 0) {
                ui.clear();
                ui.mostrarEventos(resp.events);
            } else {
                ui.mostrarMensaje('No hay eventos', 'alert alert-danger mt-4');
            }
        })
        .catch(err => console.log(err));
    } else {
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
});