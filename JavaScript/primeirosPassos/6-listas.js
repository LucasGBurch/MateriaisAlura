console.log(`Trabalhando com listas`)
// Sem listas: ctrl + k + c comenta tudo (+ k + u remove comentário)
// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

// console.log("Destinos possíveis:")
// console.log(salvador, saoPaulo, rioDeJaneiro)

// Com listas:
const listaDeDestinos = new Array( // Construtor da lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)
// adicionando item após o construtor:
listaDeDestinos.push(`Curitiba`)
console.log(listaDeDestinos)

// removendo:
listaDeDestinos.splice(1, 2) // a partir da posição 1, 2 elementos
console.log(listaDeDestinos) // saiu sao paulo e rio (foi pra direita o splice)
console.log(listaDeDestinos[0], listaDeDestinos[1]) // imprimir Salvador e Curitiba
// Mais dicas pra estudo em biblioteca: Array JS no google