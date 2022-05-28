// Aula para utilizar Requisição AJAX (JS Assíncrono + XML)
// Objetiva buscar dados em outro site sem interferir no funcionamento do JS.

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {
  var xhr = new XMLHttpRequest();

  // A velha Requisição GET:
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  // Ao carregar, executa função para exibir conteúdo
  xhr.addEventListener("load", function () {

    var erroAjax = document.querySelector("#erro-ajax");
    if (xhr.status == 200) { // 200 é quando dá certo a requisição!!

      erroAjax.classList.add("invisivel");
      var resposta = xhr.responseText;
      // console.log(xhr.responseText); // Tipo String, um JSON;

      var pacientes = JSON.parse(resposta); // transforma em ARRAY;
      // console.log(pacientes);

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      // Capturando erros: testar URL que não existe!

      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});

// https://api-pacientes.herokuapp.com/pacientes
