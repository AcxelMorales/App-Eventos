'use strict';

class EventBrite {

    constructor() {

        this.tokenOuth = 'ROUFBQIAS2OLLKIFB4XN';
        this.ordenar = 'date';
    }

    // obtiene las categorias
    async obtenerCategorias() {
        // consultar categorias a la API
        const respCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.tokenOuth}`);
        // esperar la espuesta y devolver un json
        const categorias = await respCategorias.json();

        return categorias;
    }

    async getEventos(busqueda, categoria) {

        const search = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${busqueda}&sort_by=${this.ordenar}&categories=${categoria}&token=${this.tokenOuth}`);

        const resp = await search.json();

        return resp;
    }
}