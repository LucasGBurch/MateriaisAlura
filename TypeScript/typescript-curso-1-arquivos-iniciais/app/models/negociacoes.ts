import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];
    // Mesma coisa que Array<Negociacao> = []

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] {
        return [...this.negociacoes];
    } // Pega CADA ITEM da array e põe numa nova (obrigatório antes de usarmos readonly)
}   // Isso evita com que a array possa ser editada fora dos métodos que temos (o adiciona(negociacao), no caso)!!

/* O ReadonlyArray (depois trocado por "readonly Negociacao[]") aumenta ainda mais essa Programação Defensiva!!
Porque o ReadonlyArray faz com que o Array só aceite métodos que NÃO O MODIFICAM!!! */



