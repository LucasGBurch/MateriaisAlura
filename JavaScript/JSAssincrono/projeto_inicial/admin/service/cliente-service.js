const criaNovaLinha = (nome, email) => {
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
  return linhaNovoCliente;
};


const tabela = document.querySelector('[data-tabela]');

const listaClientes = () => {
  const promise = new Promise((resolve, reject) => {

    const http = new XMLHttpRequest();
    http.open('GET', 'http://localhost:3000/profile');

    http.onload = () => {
      if (http.status >= 400) {
        reject(JSON.parse(http.response));
      } else {
        resolve(JSON.parse(http.response));
      }
    };
    // Lembrando de rodar "npx json-server --watch db.json" para exibir o array dos dados convertidos em JSON e lidos pelo no onload.
    http.send();

    /* Pegando dados "de outra semana", numa hipótese:
  
    const http2 = new XMLHttpRequest();
    http2.open('GET', 'http://localhost:3000/profile/semanaPassada');
  
    http2.onload = () => {
      const data = JSON.parse(http.response);
      data.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
    });
    http2.send;
  
    ISSO SERIA FEITO DENTRO DO PRIMEIRO HTTP; SE FOSSE FEITO DA SEMANA RETRASADA, SERIA DENTRO DESTE HTTP2 NUMA SEQUÊNCIA ENCADEADA!! Isso se chama "CALLBACK", mas pela dificuldade de entendimento, gerou um "callback hell", um inferno de funções auxiliares. Por isso, foi trocada por outra solução.
    */
    // Para evitar o problema, foram criadas as Promises!! Inicializadas ao colocarmos esse código dentro da listaClientes.

  });
  console.log(promise)
  return promise;

};

// Com a função anônima dentro de listaClientes pronta com a Promise, chamamos ela e, com .then colocamos os elementos na tabela com o criaNovaLinha do template:
listaClientes()
  .then(data => {
    data.forEach(elemento => {
      tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email));
    })});
