export class Funcionario {
    
    constructor(nome, salario, cpf) {
        this._nome = nome
        this._salario = salario
        this._cpf = cpf

        this._bonificacao = 1 // "cem puceeentu"
        this._senha
    }

    autenticar(senha) {
        return senha == this._senha
    } // se a senha bater, a classe Sistema autentica!

    cadastrarSenha(senha) {
        this._senha = senha
    }
}