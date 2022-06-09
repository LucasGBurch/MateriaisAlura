export class Negociacao {
    constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
    ) {}

    get data(): Date { // Data precisou seguir privado E O GETTER PRECISOU DO new Date(.getTime), uma cópia. Tudo para evitar que fossem acessados métodos como setDate do objeto Date() nos métodos do controller.
        const data = new Date(this.data.getTime());
        return data;
    }

/* Estes Getters eram usados quando os atributos eram private
        public readonly simplificou código!!
    get quantidade(): number {
        return this.quantidade;
    }

    get valor(): number {
        return this.valor;
    }
*/

    get volume(): number {
        return this.quantidade * this.valor;
    }
}
