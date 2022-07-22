const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];
// 4. continuação) aqui, precisamos transformar as strings do Storage convertidas a partir de JSON, em JSON novamente. Por isso envolvemos ele ali em itens com JSON.parse

itens.forEach((elemento) => {
    criaElemento(elemento);
}); // 5) Com a refatoração, tudo que já está no Storage vira elemento no site!! Por isso o getItem na const itens.

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Evita recarregar a página, comportamento padrão do submit de um formulário;

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']
    // evento do formulário.alvo.elementos['nome do input'].valor

    // Para atualizar itens com nome existente (diferente de vazio-undefined):
    const existe = itens.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value,
    };

    if (existe) { // adicionamos id ao objeto se existir:
        itemAtual.id = existe.id;

        atualizaElemento(itemAtual);
    } else { // senão, criamos o elemento primeiro e o id será o tamanho do Array!

        itemAtual.id = itens.length; // começa em 0, quando não há itens ainda
        criaElemento(itemAtual);
        itens.push(itemAtual);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id; // 6) cria um data-id na tag strong.

    novoItem.appendChild(numeroItem); // Nº com <strong> add ao 'li' via appendChild, para não criar um objeto;
    novoItem.innerHTML += item.nome; // Nome acrescentado; como é só uma string, pode ser adicionada via innerHTML

    lista.appendChild(novoItem);

};

function atualizaElemento(item) {
    // 6) Testa no console.log() e tenta adicionar item repetido (detalhe encardido esse das aspas simples para envolver o número)
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade; // mudando seu innerHTML com o itemAtual.quantidade, ele é atualizado!! Falta agora o do localStorage, senão volta ao valor anterior!!

    // 7)
};

    // 1) localStorage.setItem inicialmente só adicionava um nome/quantidade na memória local (Application, Storage, localStorage), sobrescrevendo o anterior, apesar dos elementos de lista estarem sendo criados na tela antes de um refresh;

    // 2) Em vez de adicionar nome e quantidade, adicionamos um objeto com os dois, mas, para ser lido não só como objeto do tipo Object, precisamos converter em string via stringify, do JSON. O localStorage só guarda strings;

    // 3) Agora que o objeto fica legível no Storage, precisamos criar um array de itens lá em cima para criar um Array de Objetos. Por isso, em vez do item atual, passamos a adicionar pelo setItem acima o Array atualizado, ou seja, após o .push(itemAtual);

    // 4) A seguir, mudamos de "item" para "itens" o localStorage e, para adicionar seus novos itens para a lista, fazemos uso do .getItem lá no início. No, antes, array vazio itens. Caso não exista, seguirá sendo um array vazio, por isso o operador ||. A partir daí, a gente itera esse array via forEach para transformá-los em elementos do site;

    // 5) Na aula seguinte, 3.3, refatoramos o código que cria elementos para podermos criar os elementos fazendo uso do Array de itens. Essa refatoração envolve retirar a manipulação do objeto do array de itemAtual e seu localStorage de criarElemento(), para que essa função já os receba prontos. Por isso, essa parte é deslocada para o evento de preenchimento de formulário. O objeto vai antes da função criaElemento() e nome e quantidade recebem um .value e por isso a função passa a receber só o itemAtual também. Por isso que agora, além de aditionarmos esse itemAtual ao Array e ao localStorage, passamos a adicioná-lo aos elementos do site!!

    // 6) O passo seguinte - aula 4 - é, quando houver já o nome de um item criado no array e nos elementos, ele deve ser atualizado se escrito de novo, em vez de um novo igual ser criado. Para isso criamos a constante existe, que utiliza .find no array itens a condição do elemento.nome ser estritamente igual ao nome.value. Se essa condição ocorrer, adicionamos um id no itemAtual. E para funcionar, acrescentamos a criação do id no criaElemento, através do data-attributes (dataset). Para finalizar, criamos a função atualizaElemento(itemAtual), para atualizar a quantidade!!