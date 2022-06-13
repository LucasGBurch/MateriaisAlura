import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) { // True quando é um elemento não-nulo;
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else { // No else o form seria nulo
    throw Error('Não foi possível inicializar a aplicação. Verifique se o form existe');
}
    

