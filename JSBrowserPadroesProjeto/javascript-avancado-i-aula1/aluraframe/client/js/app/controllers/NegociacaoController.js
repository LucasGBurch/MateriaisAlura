class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document); // bind para manter document no comando armazenado em $
        // cada input tem seu id (#) no index.html
        this._inputData = $('#data'); // a data vem em string, precisa do ajuste com um "new Date()"
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor'); 
    } 
    
    /* BOA PRÁTICA:
    Melhor deixar eles como this. no construtor do que declarar como let nos métodos, pois a API precisaria buscar/percorrer o DOM a cada evento adicionar!!
    Desse modo, a propriedade já fica salva e reutilizável!! */

    adiciona(event) {
        event.preventDefault(); 
        // impede submit pra não atualizar página;

        let data = new Date(
            ...this._inputData.value // o ... desmembra a Array
            .split('-')
            .map((item, indice) => item - indice % 2)
        );
        /*
        Varre a array com ARROW FUNCTION, e muda 2ª posição [1], para não errar o mês
        Conversão implícita da string item. Só vai subtrair a posição [1], que é o mês, que vem de 0 a 11, por isso precisa decrementar antes com o map()


        O .split('-') transforma o array numa string com - e a ALTERNATIVA abaixo troca por vírgula, que seria uma construção de data com os valores literais (dispensando subtrair 1 do mês):
        .value.replace(/-/g, ',') RegEx = /-/global
        */

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );

        console.log(negociacao);
    } 
}
