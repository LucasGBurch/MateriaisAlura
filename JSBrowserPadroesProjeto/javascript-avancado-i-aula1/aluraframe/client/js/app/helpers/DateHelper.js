class DateHelper {

    constructor() { // a classe sempre cria por padrão um vazio mesmo sem colocá-lo!!

        throw new Error('Esta classe não pode ser instanciada');
    }

    // Concatenando para mostrar no formato "normal";
    static dataParaTexto(data) {
        
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
    // static = não preciso instanciar numa variável (em Controller);
    static textoParaData(texto) {

        // Testando formato da data via RegExp:
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) {
            throw new Error('Deve estar no formato aaaa-mm-dd');
        } // pode forçar este erro no console com DateHelper.textoParaData('dd-mm-aaaa')

        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

}


/* RESUMO DO TEXTO PARA DATA (o _inputData é do Controller, onde fizemos essa operação de Datas inicialmente):
let data = new Date(
    ...this._inputData.value       // o ... desmembra a Array (é DESTRUCTURING ou SpreadOperator)
    .split('-')                    // O - é o parâmetro para separar!!
    .map((item, indice) => item - indice % 2)
);

        DESCRIÇÃO DE let data:
Varre a array desmembrada em 3 strings a cada. Isso DEPOIS DE, com ARROW FUNCTION (um comando só dispensa {}), mudar a 2ª posição [1], para não errar o mês.
Conversão implícita da string item. Só vai subtrair a posição [1], que é o mês. Este vem de 0 a 11(0 é 1, 11 é 12...), por isso precisa decrementar antes com o map(), para splitar a Array em três, usando '-' como parâmetro e, finalmente, entregar para a classe date a Array dividida em 3 números;

A ALTERNATIVA abaixo troca por vírgula, que seria uma construção de data com os valores literais (dispensando subtrair 1 do mês):
.value.replace(/-/g, ',') RegEx = /-/global
*/

