export function logarTempoDeExecucao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
// acima sobrescrevemos o Original, porque cada método tem seu nome e performance (e sua quantidade de parâmetros, por isso o ...args: array ):
        descriptor.value = function(...args: Array<any>) { // ou any[]
            const t1 = performance.now();
// Chamando método original depois de t1 e antes de t2:
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000} segundos.`)
            retorno
        }; // propertyKey é o nome do método!!

        return descriptor;
    }
}

// Decorator ainda é experimental em TS (JS não suporta, mas a compilação faz uma tradução bem grande lá)
// Esse método pode ser replicado agora em qualquer método que quisermos!!
// Isso permite verificar a performance sem poluir nosso código!!
