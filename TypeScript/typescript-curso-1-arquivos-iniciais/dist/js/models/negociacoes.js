export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return [...this.negociacoes];
    } // Pega CADA ITEM da array e põe numa nova
} // Isso evita com que a array possa ser editada fora dos métodos que temos (o adiciona(negociacao), no caso)!!
/* O Readonly aumenta ainda mais essa Programação Defensiva!!
Porque o ReadonlyArray faz com que o Array só aceite métodos que NÃO O MODIFICAM!!! */
