const botao = document.querySelector("#calcular");

botao.addEventListener("click", () => {
  console.log("Botão: Fui clicado!");
  resultado.innerHTML = "Botão clicado!";
});

/*Complemento utilizando a classe resultado:*/

const resultado = document.querySelector(".resultado");

/*

Gabarito:
const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado";
});
*/ 
