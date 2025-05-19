// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require ("prompt-sync") () // Habilitando entrada

// Capturando o número
let numero = Number (prompt ("Digite o número: "))

// Verifica se o dado escrito não é um número inteiro. 
// Caso positivo, escrevará o número 10 vezes.
// Caso contrário, informará que o número é inválido.
if (Number.isInteger(numero)){
    let contador = 0
    while (contador < 10){
        console.log (numero)
        contador++
    }

}else console.log ("Número inválido")