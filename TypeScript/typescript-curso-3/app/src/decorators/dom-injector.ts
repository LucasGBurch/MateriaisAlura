export function domInjector(seletor: string ) {

    return function(target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name}
        e adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o
                ${seletor} para injetar em ${propertyKey}`);
            }
// se houver elemento, ele é buscado diretamente daqui:
            return elemento;
// serve para pouparmos cache (cache decorator copy)
// Isso diminui o tempo de execução do método adicionar depois do primeiro uso, quando não temos elemento ainda. Dessa forma, ele busca os elementos do DOM apenas uma vez, ou seja, na primeira/necessária.
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}
