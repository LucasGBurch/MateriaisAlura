// Classe abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois esta é uma classe abstrata")
        } // Vale como um "abstract" do Java. Lançamos erros em classes e métodos abstratos de JS porque a linguagem não possui um suporte nativo a esse controle!

        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    // Métodos acessores:
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    sacar(valor) {
        // só é declarado, pois é método ABSTRATO.:
        throw new Error("O método sacar da conta é abstrato.")
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado
            return valorSacado
        }

        return 0 // caso não consiga entrar no if
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