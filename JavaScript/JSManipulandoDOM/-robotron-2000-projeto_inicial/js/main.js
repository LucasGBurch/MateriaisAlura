// Arrays das classes que usamos:
const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica");

/*Exercício final de mudança de cor do robô:*/ 

const robotron = document.querySelector("#robotron");


const pecas = {
  "bracos": {
    "forca": 29,
    "poder": 35,
    "energia": -21,
    "velocidade": -5
  },

  "blindagem": {
    "forca": 41,
    "poder": 20,
    "energia": 0,
    "velocidade": -20
  },
  "nucleos": {
    "forca": 0,
    "poder": 7,
    "energia": 48,
    "velocidade": -24
  },
  "pernas": {
    "forca": 27,
    "poder": 21,
    "energia": -32,
    "velocidade": 42
  },
  "foguetes": {
    "forca": 0,
    "poder": 28,
    "energia": 0,
    "velocidade": -2
  }
};

controle.forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    atualizaEstatisticas(evento.target.dataset.peca);
  }) // (conteúdo do botão (+ ou -), elemento "pai" do input (div classe controle))
});

function manipulaDados(operacao, controle) {

  // mudamos de classes iguais às html/css para data-attributes, para evitar falhas de código em caso de modificação do textContent, que deu lugar na chamada do manipulaDados para o ".dataset.controle"
  const peca = controle.querySelector("[data-contador]");

  /* a div de classe controle é pai do contador
  logo, é o endereço de onde estamos clicando:
  Braços, Blindagem, Núcleos, Pernas ou Foguetes*/

  if (operacao === "-") {
    if (parseInt(peca.value) > 0) {
      peca.value = parseInt(peca.value) - 1;
    }
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca) {
  estatisticas.forEach((elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
  });
}

function trocaImagem(cor) {
  document.querySelector(".robo").src = "img/Robotron 2000 - " + cor + ".png";
}


/* Primeiras duas aulas:
const robotron = document.querySelector("#robotron");

robotron.addEventListener("click", () => {
  alert('oe')
});

// sem arrow function (em vez da "() =>", chama ela direto):
function dizOi(nome) {
  console.log(`Olá, ${nome}!`);
  console.log("Bem-vindo ao Robotron 2000")
}

robotron.addEventListener("click", dizOi("Lusca"));
*/


