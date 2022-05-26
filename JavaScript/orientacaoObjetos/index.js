import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

// a recomendação é botar, em vez de ""./Classe.js", o caminho todo em projetos reais.
// Para o terminal do Node não dar erro por tratar a execução só como um arquivo de script, é preciso settar que é um módulo (aqui no terminal do Node, faz isso usando o comando "npm init"). Após colocar nome, versão, descrição, main (index.js) e license, um arquivo package.json surje na pasta do projeto. É neeeesse arquivo que setamos type: module!!!

const cliente1 = new Cliente("Ricardo", 11122233309)
const cliente2 = new Cliente("Alice", 88822233309)

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)
contaCorrenteRicardo.depositar(500)
console.log("Saldo contaRicardo: "
            + contaCorrenteRicardo.saldo)

const conta2 = new ContaCorrente(102, cliente2)

let valor = 200
contaCorrenteRicardo.transferir(valor, conta2)
console.log("Saldo conta2: " + conta2.saldo)
console.log("Saldo contaRicardo:",
            contaCorrenteRicardo.saldo)

console.log(ContaCorrente.numeroDeContas)