class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
        // Programação Defensiva: Criar um novo array (cópia) para só poder adicionar pelo método (evitando mudanças como length, push de novos itens etc)
    }
}

