export abstract class View<T> {
    // <T> é Type, de Generics por causa dos métodos!!
    // abstract impede que ela seja instanciada!!

    protected elemento: HTMLElement;
    private escapar = false;
    
    constructor(seletor: string, escapar?: boolean) {
         const elemento = document.querySelector(seletor);
    // Recebe o id da div onde fica a tabela do template(), renderizada pelo update()!! Se ele existir, será declarado no construtor:
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique.`);
        }
        if (escapar) { // o ? tornou escapar parâmetro opcional!!
    // parâmetros opcionais devem ser declarados POR ÚLTIMO!!
            this.escapar = escapar;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            // Uma RegEx para trocar qualquer inserção maliciosa de script por nada!! Nossos templates escritos não usam scripts. Segurança extra além da que já há no navegador:
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    } // Este é igual aos filhos, só muda o tipo (por isso o Generics T)

    protected abstract template(model: T): string;
    // As filhas implementam e só elas podem ter acesso tb
}
