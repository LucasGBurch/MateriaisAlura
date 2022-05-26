export class Cliente {
    nome
    #cpf

// Em modularização, usamos export para a classe funcionar no index. Enquanto lá usamos import.

    get cpf(){
        return this.#cpf
    }

    constructor(nome, cpf) {
        this.nome = nome
        this.#cpf = cpf
    }
}