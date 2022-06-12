export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        // Recebe o id da div onde fica a tabela do template(), renderizada pelo update()!!
        if (escapar) { // o ? tornou escapar parâmetro opcional!!
            // parâmetros opcionais devem ser declarados POR ÚLTIMO!!
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            // Uma RegEx para trocar qualquer inserção maliciosa de script por nada!! Nossos templates escritos não usam scripts. Segurança extra além da que já há no navegador:
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    } // Este é igual aos filhos, só muda o tipo (por isso o Generics T)
}
