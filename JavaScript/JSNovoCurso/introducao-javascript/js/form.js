var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
  // IMPEDE BOTÃO DE ATUALIZAR PÁGINA E LIMPAR FORM:
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  // Extrai informações do paciente do form:
  var paciente = obtemPacienteDoFormulario(form);

  // Criando a Linha Nova da Tabela:
  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente); // String vazia ou msg de erro;

  if (erros.length > 0) {
    // Se tem a msg de erro ou não;
    exibeMensagensDeErro(erros);
    return; // Esse return vazio faz sair da função para não cadastrar
  }

  // Adicionando o paciente (sua linha preenchida) na tabela:
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset(); // Limpa os campos!
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = ""; 
  // Zerando uma última vez a lista de msg de erro!

});

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = ""; // Zerando a lista para quando não há erros!!!
  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function obtemPacienteDoFormulario(form) {
  // Função que cria um objeto em vez de atribuir valores do form à variáveis:
  var paciente = {
    // form.[o que tem em name=""].value
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };

  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  // Criando as Colunas Novas (td) da Tabela:
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
/*CÓDIGO ORIGINAL ANTES DA FUNÇÃO MONTA TD:

  nomeTd.classList.add("info-nome");
  pesoTd.classList.add("info-peso");
  alturaTd.classList.add("info-altura");
  gorduraTd.classList.add("info-gordura");
  imcTd.classList.add("info-imc");

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = calculaImc(paciente.peso, paciente.altura);
*/

function validaPaciente(paciente) {
  var erros = []; // array com mais de um erro;
  // if simples dispensa chaves se preferir;

  if (paciente.nome.length == 0) {
    erros.push("O nome não pode ser em branco!");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido!");
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida!");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco!");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco!");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco!");
  }

  return erros;
}


