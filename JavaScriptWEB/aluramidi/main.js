function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio) // armazenando como constante para melhorar;

    if (elemento === null || elemento.localName != 'audio') {
        alert('Elemento não encontrado ou seletor inválido!') // para quando executar com elementos não existentes
    } else {
        elemento.play();
    }
}

// document.querySelector('.tecla_pom').onclick = tocaSom;
// Aqui é sem parênteses, para guardar a função no onclick;
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const classe = tecla.classList[1];
    // esse [1] trás a classe tecla_SOM
    // o [0], vide HTML, é a classe geral "tecla"
    const idaudio = `#som_${classe}`;

    tecla.onclick = function() { // função ANÔNIMA
        tocaSom(idaudio);
    };

    // para verificar os valores no console (F12 ou ctrl + shift + i na página):
    // console.log(idaudio);
    // console.log(i);

    tecla.onkeydown = function (evento) {

    if (evento.code === 'Space' || evento.code === 'Enter') {
        // quando abaixar a tecla (Enter):
            tecla.classList.add('ativa');
        }
    }
    
    // quando soltar a tecla:
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
