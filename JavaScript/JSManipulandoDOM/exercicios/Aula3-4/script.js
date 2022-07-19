const lista = document.querySelector("ul");

function escondeTintas() {
    lista.style.display = "none";
}

function mostraTintas() {
    lista.style.display = "block";
}

/*

Gabarito que não funciona:

const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});

*/
