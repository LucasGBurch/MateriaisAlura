export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
        // Recebe o id da div onde fica a tabela do template(), renderizada pelo update()!!
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    } // Este é igual aos filhos, só muda o tipo (por isso o Generics T)
}
