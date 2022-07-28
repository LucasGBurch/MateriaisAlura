import { clienteService } from "../service/cliente-service.js";

const criaNovaLinha = (nome, email, id) => {
  const linhaNovoCliente = document.createElement('tr');

  const conteudo = `
    <td class="td" data-td>${nome}</td>
    <td>${email}</td>
    <td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>
  `;

  linhaNovoCliente.innerHTML = conteudo;
  linhaNovoCliente.dataset.id = id; // declarar lá embaixo, no listaClientes;

  return linhaNovoCliente;
};

const tabela = document.querySelector('[data-tabela]');

tabela.addEventListener('click', (evento) => {
  let ehBotaoDeletar = evento.target.className === 'botao-simples botao-simples--excluir';

  if (ehBotaoDeletar) {
    // Target na linha mais próxima do botão...
    const linhaCliente = evento.target.closest('[data-id]')
    // e seu id:
    let id = linhaCliente.dataset.id;
    // Agora temos tudo para remover:
    clienteService.removeCliente(id)
      .then(() => {
        linhaCliente.remove();
      });
  }
});

// Depois do fetch do cliente-service, iteramos os dados para criar novas linhas na tabela com o template acima.
clienteService.listaClientes()
  .then(data => {
    data.forEach(elemento => {
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id));
    })
  });
