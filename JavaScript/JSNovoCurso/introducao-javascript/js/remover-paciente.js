var tabela = document.querySelector("table");
// selecionamos direto a tag da tabela!

tabela.addEventListener("dblclick", function (event) {
  var alvoEvento = event.target; // TD (dado tabela, mas pega TH também)
  var paiDoAlvo = alvoEvento.parentNode; // TR (linha inteira da tabela)

  // Como o TH (cabeçalho) também é filho da tabela (e de uma linha), precisamos de outra condição antes de remover:

  if (alvoEvento.tagName == 'TD') {
    paiDoAlvo.classList.add("fadeOut");
    // as classes estão no index.css
    // Precisa dos 0.5s (500ms) para o efeito aparecer, por isso usamos esta outra função setTimeout para aplicar o remover:

    setTimeout(function () {
      paiDoAlvo.remove();
    }, 500); // aguarda 500ms para executar a função anônima;
  }
});

/* Primeiro modo aplicado na aula (pega só a célula):

var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function (paciente) {
  // evento doubleclick:
  paciente.addEventListener("dblclick", function () {
      this.remove(); // this é o paciente atrelado ao evento escutado;
  });
});

PROBLEMA DESTE MODO:
APLICA SOMENTE ÀS LINHAS QUE JÁ EXISTIAM;
NÃO APLICA NAS NOVAS CRIADAS PELO FORMULÁRIO;
*/
