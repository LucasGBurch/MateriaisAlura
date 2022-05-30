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
    Desse modo, a propriedade já fica salva e reutilizável!!
    Exemplo: Se os elementos ficassem em adicionar e fossem adicionadas 100 negociações, o DOM teria que buscar 100x
    */

    adiciona(event) {

        event.preventDefault(); 
        // impede o submit de atualizar página;

        let helper = new DateHelper();
        let data = helper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade,
            this._inputValor
        );

       console.log(negociacao);
       console.log(helper.dataParaTexto(negociacao.data));
    } 
}
