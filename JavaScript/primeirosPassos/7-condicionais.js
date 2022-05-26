console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array( // Construtor da lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 18
const estaAcompanhada = false
let temPassagemComprada = true

console.log("Destinos Possíveis:")
console.log(listaDeDestinos)

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1) // a partir da posição 1, 1 elemento
// } else if (estaAcompanhada) {
//     console.log("Comprador menor de idade. Porém está acompanhado por maior.")
//     listaDeDestinos.splice(1, 1) // a partir da posição 1, 1 elemento
// } else {
//     console.log("Comprador menor de idade. Não pode comprar.")
// }

// Boa prática - evitando códigos duplicados:
if(idadeComprador >= 18 || estaAcompanhada) {
    listaDeDestinos.splice(1, 1) // só uma remoção e mensagem.
} else {
    temPassagemComprada = false
    console.log("Comprador menor de idade. Não pode comprar.")
}

console.log("Embarque... \n")
if((idadeComprador >= 18 || estaAcompanhada) && temPassagemComprada) {
    console.log("Boa viagem!!")
} else {
    console.log("Você não pode embarcar.")
}