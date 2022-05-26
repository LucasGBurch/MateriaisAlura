console.log(`Trabalhando com atribuição de variáveis...`)
// Lembrando que JS é case sensitive

// Declarações:
const idade = 28
let nome = "Daruk" // pra mudar, não pode ser const!!
const sobrenome = "Goron"
// Melhor Prática: declarar máximo de const para evitar bugs/variações indesejadas

console.log(nome, sobrenome) // vírgula separa (+ " " +)
console.log(`Nome: ${nome}\nSobrenome: ${sobrenome}`) // por interpolação

nome = nome + " " + sobrenome // atrivuindo valor
console.log(nome)