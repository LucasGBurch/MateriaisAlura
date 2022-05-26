console.log("Conversão de Tipos")

console.log("ano de " + 2022) // concatenação (vira string)
console.log("2" + "2") // Concatena de novo
console.log(parseInt("2") + parseInt("2")) // Soma ao converter

// só o sinal de + serve para concatenar
console.log("7" / "2") // os demais sinais geram operação
console.log("10" - "2")
console.log("10" * "2") // isso se chama de conversão IMPLÍCITA

console.log("Nome" * "2") // gera NaN (tipo Not a Number)
console.log(6.5) // ponto flutuante
console.log(6,5) // vírgula é para funções especiais