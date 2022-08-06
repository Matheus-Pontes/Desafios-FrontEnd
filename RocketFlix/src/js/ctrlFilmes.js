import { API_URL } from './api.js';
import { Events } from './util.js';

const $filmeCard = document.querySelector('#cardFilme');
const $btnGetRandomFilme = document.querySelector('#btnGetRandomFilme');

$btnGetRandomFilme.addEventListener('click', function() {
    Events.getFilmes(API_URL, $filmeCard);
});