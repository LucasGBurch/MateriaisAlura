var campos = [
  document.querySelector("#data"),
  document.querySelector("#quantidade"),
  document.querySelector("#valor"),
];

console.log(campos);

var tbody = document.querySelector("table tbody");

document.querySelector(".form").addEventListener("submit", function (event) {

    event.preventDefault(); // para não reiniciar a página na inclusão
  var tr = document.createElement("tr"); // Criando linha de tabela

  campos.forEach(function (campo) {
    var td = document.createElement("td");
    td.textContent = campo.value;
    tr.appendChild(td); // colocando dados na linha de tabela
  });

  var tdVolume = document.createElement("td");
  tdVolume.textContent = campos[1].value * campos[2].value;

  tr.appendChild(tdVolume);

  tbody.appendChild(tr);

  campos[0].value = '';
  campos[1].value = 1;
  campos[2].value = 0; // zerando os campos após a inclusão

  // colocando cursos no [0]:
  campos[0].focus();

});
