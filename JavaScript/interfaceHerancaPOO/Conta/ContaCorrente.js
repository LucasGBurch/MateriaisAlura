import { Conta } from "./Conta.js"

export class ContaCorrente extends Conta {
    static numeroDeContas = 0

    /* # significa atributo PRIVADO! Para encapsular. Na época do curso (2020), ainda não tinham aprovado essa convenção (hoje, de acordo com o mozzila, já vale!) _ foi usado provisoriamente na época e usei no curso de interfaceHerança (fiz com # no de orientacaoObjetos por ser projeto menor e ter servido para entender a proteção do #)
    _cliente DECLARADOS NO CONSTRUTOR NESTE CURSO!
    _saldo = 0 */
    
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.numeroDeContas++
    }

    // sobrescrevendo comportamento da classe pai:
    sacar(valor) {
        let taxa = 1.1
        return this._sacar(valor, taxa)
    }
    
    depositar(valor) {
        if (valor <= 0) return
        this._saldo += valor
        return valor
    }
    
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
    
}