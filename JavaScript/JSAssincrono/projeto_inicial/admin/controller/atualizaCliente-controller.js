import { clienteService } from "../service/cliente-service.js";

(async () => {
  const pegaURL = new URL(window.location); // Dados da página URL

  const id = pegaURL.searchParams.get('id');
  // console.log(id); // Parâmetro id da página, referente ao item no qual clicamos para Editar

  const inputNome = document.querySelector('[data-nome]');
  const inputEmail = document.querySelector('[data-email]');

  try {
    // detalhaCliente é a comunicação com a lista, para pegar os dados de um id específico (lembrando que precisa estar rodando com npx json-server):
    const dados = await clienteService.detalhaCliente(id);
    // Dados da API do service
    inputNome.value = dados.nome;
    inputEmail.value = dados.email;
  } catch (erro) {
    console.log(erro);
    window.document.href = '../telas/erro.html'
  };

  // Agora fazemos uso do formulário de edição para atualizar:
  const formulario = document.querySelector('[data-form]');


  formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault(); // async para indicar que é assíncrono
    try {
      await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value) // await para aguardar a promise antes de seguir adiante (que antes seria .then(comandos));
      window.location.href = "../telas/edicao_concluida.html";
    } catch (erro) {
      console.log(erro);
      window.document.href = '../telas/erro.html'
    };
  });
})();
// Esses últimos parênteses são a chamada da função assíncrona iniciada lá em cima;
