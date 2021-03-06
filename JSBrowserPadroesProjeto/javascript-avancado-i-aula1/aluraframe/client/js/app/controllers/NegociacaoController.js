class NegociacaoController {

    constructor() {
        
        let $ = document.querySelector.bind(document); // bind para manter document no comando armazenado em $
        // cada input tem seu id (#) no index.html
        this._inputData = $('#data'); // a data vem em string, precisa do ajuste com um "new Date()"
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
        this._mensagemView.update(this._mensagem)
    }
    
    /* BOA PRÁTICA:
    Melhor deixar eles como this. no construtor do que declarar como let nos métodos, pois a API precisaria buscar/percorrer o DOM a cada evento adicionar!!
    Desse modo, a propriedade já fica salva e reutilizável!!
    Exemplo: Se os elementos ficassem em adicionar e fossem adicionadas 100 negociações, o DOM teria que buscar 100x
    */

    adiciona(event) {

        event.preventDefault(); 
        // impede o submit de atualizar página;

       this._listaNegociacoes.adiciona(this._criaNegociacao());
       this._negociacoesView.update(this._listaNegociacoes);
       this._mensagem.texto = 'Negociação adicionada com sucesso!';
       this._mensagemView.update(this._mensagem);

       this._limpaFormulario();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() { // método privado, só este Controller chama

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}
