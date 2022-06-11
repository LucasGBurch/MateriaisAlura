export abstract class View<T> {
    // <T> é Type, de Generics por causa dos métodos!!

    protected elemento: HTMLElement;
    
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    // Recebe o id da div onde fica a tabela do template(), renderizada pelo update()!!
    }

    update(model: T): void {
          const template = this.template(model);
          this.elemento.innerHTML = template;
    } // Este é igual aos filhos, só muda o tipo (por isso o Generics T)

    abstract template(model: T): string; // As filhas implementam
}
