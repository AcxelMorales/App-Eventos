'use strict';

class Interfaz {

    constructor() {
        // inicia la app al instanciar
        this.init();
        // leer en donde se mostrara el resultado
        this.lista = document.getElementById('resultado-eventos');
    }

    // método para cuando se inicialize la api
    init() {
        // llamar al método de la api
        this.imprimirCategorias();
    }

    clear() {
        
        this.lista.innerHTML = '';
    }

    // imprimir categortias
    imprimirCategorias() {

        const listacategorias = eventBrite.obtenerCategorias()
        .then(resp => {
            const cats = resp.categories;
            const selectCategoria = document.getElementById('listado-categorias');

            // recorremos la resp y llenamos el <select> con <options>
            cats.forEach(element => {
                const option = document.createElement('option');
                option.value = element.id;
                option.innerHTML = element.name_localized;
                selectCategoria.appendChild(option);
            });
        })
        .catch(err => console.log(err));
    }

    mostrarMensaje(mensaje, clases) {

        const div = document.createElement('div');
        div.classList = clases;
        div.innerHTML = mensaje;

        document.getElementById('buscador').appendChild(div);
        setTimeout(() => {
            this.limpiarMensaje();
        }, 3000);
    }

    limpiarMensaje() {

        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

    mostrarEventos(data) {

        data.forEach(e => {
            
            this.lista.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <img class="img-fluid mb-2" src="${e.logo !== null ? e.logo.url : ''}"
                        </div>
                        <div class="card-body">
                            <div class="card-text>
                                <h2 class="text-center">${e.name.text}</h2>
                                <p class="lead text-info">Información del Evento</p>
                                <p>${e.description.text.substring(0, 280)}...</p>
                                <span class="badge badge-secondary">Fecha y Hora: ${e.start.local}</span>
                                <a href="${e.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}