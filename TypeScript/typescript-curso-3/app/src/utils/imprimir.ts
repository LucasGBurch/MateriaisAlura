import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objetos: Array<Imprimivel>) {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    } // A interface Imprimível garante que o método paraTexto só se aplique a tipos que retornarão strings (é um tipo de polimorfismo paramétrico!! Onde os parâmetros são dados imprimíveis)
}
