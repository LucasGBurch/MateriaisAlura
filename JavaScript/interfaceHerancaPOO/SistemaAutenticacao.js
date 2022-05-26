/*
Ser autenticável quer dizer ter o método autenticar!!

ehAutenticavel é um Duck Type, método típico para linguagens fracamente tipadas, como o JavaScript.

Duck typing é se um objeto "anda como um pato", independente de ser um ou não, ou seja, independente do tipo de objeto!!
Não depende do tipo pré-definido, mas se possuem as propriedades que queremos utilizar
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return false
    }

    // Verificar se existe método (chave) autenticar no objeto:
    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
    // se tiver, retorna true (se as filhas de Funcionario têm essa chave no método e for uma função com esse nome, o que tornou necessário criar ela em Cliente também!)
}