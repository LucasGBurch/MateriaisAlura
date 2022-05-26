class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // Para congelar o objeto como imutável (mas é raso/shallow, não se aplica em classe como em Date)!!
    }
    // Curso é de 2016, então ainda usa o _ como convenção pra atributo privado!! Atualmente o # está implementado

    get Volume() {

        return this._quantidade * this._valor;
    }

    get Data() {
        return new Date(this._data.getTime());
    } // Programação defensiva, para a data não poder ser alterada no script; a data é instanciada baseada no número do getTime

    get Quantidade() {
        return this._quantidade;
    }

    get Valor() {
        return this._valor;
    }
}
