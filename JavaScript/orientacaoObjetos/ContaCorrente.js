import { Cliente } from "./Cliente.js"

export class ContaCorrente {
    static numeroDeContas = 0
    // estático não fica específico a uma instância! então todas contam se puxar da classe lá no construtor!
    agencia

    /* # significa atributo PRIVADO! Para encapsular. Na época do curso (2020), ainda não tinham aprovado essa convenção (hoje, de acordo com o mozzila, já vale!) */
    #cliente
    #saldo = 0
    // saldo só precisa do get, porque já começa com 0 e tem sacar/depositar/transferir (tinha feito como função, este modo é o correto para o acessor)
    
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this.#cliente = novoValor
        }
    }

    get cliente() {
        return this.#cliente
    }

    get saldo() {
        return this.#saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia
        this.cliente = cliente
        ContaCorrente.numeroDeContas++
    }

    // Operações (como se fosse método da classe):
    sacar(valor) { // entre chaves é ESCOPO
        if (this.#saldo < valor) return
        // "early return", para não fazer nada.
        this.#saldo -= valor
        return valor
    }
    
    depositar(valor) {
        if (valor <= 0) return
        this.#saldo += valor
        return valor
    }
    
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
    

}