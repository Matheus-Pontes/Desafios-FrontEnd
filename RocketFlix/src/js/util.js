import { IMG_URL } from './api.js';

export const Events = {
    getFilmes: async function(URL, $element) {
        const filmes = await fetch(URL).then(res => res.json());
        const filme = this.randomFilme(filmes.results);
        BuildHTML.buildCardFilme(filme, $element);
    },

    randomFilme: function(filmes) {
        return filmes[Math.floor(Math.random() * (filmes.length - 0 + 1)) + 0];
    }
}

export const BuildHTML = {
    buildCardFilme: function(filme, $element) {

        $element.innerHTML = `
            <img class="filmeImg" src="${IMG_URL + filme.poster_path}" />
            
            <div class="film-content">
                <h3 class='title'>${filme.title}</h3>
                <p class='overview'>
                  ${filme.overview}
                </p>
            </div>
      `;
    }
}