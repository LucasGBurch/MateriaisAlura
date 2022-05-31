class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); // Para congelar o objeto como imutável (mas é raso/shallow, não se aplica em classe como em Date)!!
    }
    // Curso é de 2016, então ainda usa o _ como convenção pra atributo privado!! Atualmente o # está implementado;

    get volume() {

        return this._quantidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    } // Programação Defensiva: Para a data não poder ser alterada no script; a data é instanciada baseada no número do getTime;

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
