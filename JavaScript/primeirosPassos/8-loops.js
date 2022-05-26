console.log(`\nTrabalhando com loops`)

const listaDeDestinos = new Array( // Construtor da lista
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

const idadeComprador = 17
const estaAcompanhada = true
let temPassagemComprada = false
const destino = "São Paulo"

console.log("\nDestinos Possíveis:")
console.log(listaDeDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhada

let contador = 0 // quando o tem de destino for igual ao item da lista:
let destinoExiste = false
while(contador < listaDeDestinos.length) { // tamanho 3 da lista!
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true
        break
    }
    contador++
}

console.log("Destino existe:", destinoExiste)

if(podeComprar && destinoExiste) {
    console.log("Boa Viagem!!")
} else {
    console.log("Lamentamos, ocorreu um erro na compra.")
}

// Com for seria:
for(let i = 0; i < listaDeDestinos.length; i++) { // tamanho 3 da lista!
    if(listaDeDestinos[contador] == destino) {
        destinoExiste = true
    }
}