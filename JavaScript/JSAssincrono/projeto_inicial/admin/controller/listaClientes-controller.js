import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr');

  const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
  `;

  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id; // declarar lá embaixo, no listaClientes;

  return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

// Adicionamos async aqui e trocamos o then por um await em removeCliente para ganhar legibilidade:
tabela.addEventListener('click', async (evento) => {
  let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir';

  if (ehBotaoDeletar) {
    try {
      // Target na linha mais próxima do botão...
      const linhaCliente = evento.target.closest('[data-id]');
      // e seu id:
      let id = linhaCliente.dataset.id;
      // Agora temos tudo para remover:
      await clienteService.removeCliente(id);
      linhaCliente.remove();
    }
    catch (erro) {
      console.log(erro);
      window.location.href = '../telas/erro.html';
    };
  };
});

// TODOS OS .THEN FORAM TROCADOS POR async () ... await

// Depois do fetch do cliente-service, iteramos os dados para criar novas linhas na tabela com o template acima. const render criada para implementar os asybc/await
const render = async () => {
  try {
    const listaClientes = await clienteService.listaClientes();
    listaClientes.forEach(elemento => {
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
    });
  } catch (erro) {
    console.log(erro);
    window.location.href = '../telas/erro.html';
  };
};

render(); // Precisa executar o render ao final do arquivo.
