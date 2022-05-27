var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");
  // this.value: o que vai sendo digitado no campoFiltro;
  if (this.value.length > 0) {
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;

      var expressao = new RegExp(this.value, "i");
      // Usando RegEx para qualificar a busca!!
      // O "i" significa case INSENSITIVE!!

      if (!expressao.test(nome)) {
        // O que for diferente
        paciente.classList.add("invisivel");
      } else {
        // O filtro é feito pela classe css;
        paciente.classList.remove("invisivel");
      } // a classe usa display: none;
    }
  } else {
    for (let i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel");
    }
  }
});

/* ALTERNATIVA DE FILTRO SEM REGEX:

var comparavel = nome.substr(0, this.value.length);
var comparavelMinusculo = comparavel.toLowerCase();
var valorDigitadoMinusculo = this.value.toLowerCase();

if (!(valorDigitadoMinusculo == comparavelMinusculo)) {
    paciente.classList.add("invisivel");
} else{
    paciente.classList.remove("invisivel");
}

*/
