const braco = document.querySelector('#braco');

// Arrays das classes que usamos:
const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
  elemento.addEventListener("click", (evento) => {
    manipulaDados(evento.target.textContent, evento.target.parentNode);
  }) // (conteúdo do botão (+ ou -), elemento "pai" do input (div classe controle))
});

function manipulaDados(operacao, controle) {

  const peca = controle.querySelector(".controle-contador");
  // a div de classe controle é pai do contador
  // logo, é o endereço de onde estamos clicando

    if (operacao === "-") {
      if (parseInt(peca.value) > 0) {
        peca.value = parseInt(peca.value) - 1;
      }
    } else {
      peca.value = parseInt(peca.value) + 1;
    }
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


