const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = [];

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Evita recarregar a página, comportamento padrão do submit de um formulário;

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    // evento do formulário.alvo.elementos['nome do input'].valor
    criaElemento(nome.value, quantidade.value);

    nome.value = "";
    quantidade.value = "";
});

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem); // Nº com <strong> add ao 'li' via appendChild, para não criar um objeto;
    novoItem.innerHTML += nome; // Nome acrescentado; como é só uma string, pode ser adicionada via innerHTML

    lista.appendChild(novoItem);

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    };

    itens.push(itemAtual);


    // 1) Isto só adiciona um nome/quantidade na memória local (Application, Storage, localStorage), sobrescrevendo o anterior, apesar dos elementos de lista estarem sendo criados na tela antes de um refresh;

    localStorage.setItem("item", JSON.stringify(itens));

    // 2) Em vez de adicionar nome e quantidade, adicionamos um objeto com os dois, mas, para ser lido não só como objeto do tipo Object, precisamos converter em string via stringify, do JSON. O localStorage só guarda strings;

    // 3) Agora que o objeto fica legível no Storage, precisamos criar um array de itens lá em cima para criar um Array de Objetos. Por isso, em vez do item atual, passamos a adicionar pelo setItem acima o Array atualizado, ou seja, após o .push(itemAtual).
};