class View {
    // PRECISA SER CHAMADA ANTES DE SUAS HERDEIRAS NO HTML!!!
    // E as filhas precisam do constructor com { super(elemento); }
    constructor(elemento) {

        this._elemento = elemento;
    }

    template() {

        throw new Error('O método template deve ser implementado nas classes filhas!');
    }
    
    update(model) {

        this._elemento.innerHTML = this.template(model);
    }
}
