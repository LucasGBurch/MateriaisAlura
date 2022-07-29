// Independente do método, sempre lembrar de abrir terminal em admin e rodar o servidor com: npx json-server --watch db.json

const listaClientes = () => {
  return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
      if (resposta.ok) {
        return resposta.json();
      } else {
        throw new Error('Não foi possível listar os clientes');
      }
    });
};

const criaCliente = (nome, email) => {
  return fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  })
    .then(resposta => {
      if (resposta.ok) {
        return resposta.json();
      } else {
        throw new Error('Não foi possível criar um cliente');
      }
    });
};

const removeCliente = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'DELETE',
  }).then(resposta => {
    if (!resposta.ok) {
      throw new Error('Não foi possível remover um cliente');
    }
  });
};

// Semelhante à listaClientes (só que usada no atualizaCliente-controller)
const detalhaCliente = (id) => { // e com GET para UM CLIENTE (id)
  return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
      if(resposta.ok) {
        return resposta.json();
      } else {
        throw new Error('Não foi possível detalhar o cliente');
      }
    });
} // Foi uma preparação para atualizar:

const atualizaCliente = (id, nome, email) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      email: email,
    }),
  })
    .then(resposta => {
      if(resposta.ok) {
        return resposta.json();
      } else {
        throw new Error('Não foi possível atualizar o cliente');
      }
    });
};

export const clienteService = {
  listaClientes,
  criaCliente,
  removeCliente,
  detalhaCliente,
  atualizaCliente,
};
