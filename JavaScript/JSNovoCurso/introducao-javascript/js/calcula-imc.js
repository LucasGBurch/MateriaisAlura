var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);
// Primeira aula: Modificando a tag h1:
titulo.textContent = "Aparecida Nutricionista"; // IMC = peso / (altura**2)

// Segunda aula em diante:
var pacientes = document.querySelectorAll(".paciente");

// Na terceira usamos SelectorAll pra FAZER ARRAY, que é aplicada para não repetir o código através da estrutura do for:

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido) {
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!";
    paciente.classList.add("paciente-invalido");
  } // Em vez de usar .style.backgroundColor, adiciona-se uma classe! Porque assim preservamos a estilização nas css, separando do JS.

  if (!alturaEhValida) {
    console.log("Altura inválida!");
    tdImc.textContent = "Altura inválida!";
    paciente.classList.add("paciente-invalido");
  }

  if (pesoEhValido && alturaEhValida) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; // Colocando na coluna da primeira linha
  }
}

function validaPeso(peso) {
  if(peso >= 0 && peso < 1000) {
      return true;
  } else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / altura ** 2;

  return imc.toFixed(2);
}
