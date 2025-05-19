// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require ("prompt-sync") () // Habilitando entrada

 // Capturando o número
let numero = Number (prompt ("Digite o número: "))

// Verifica se o dado escrito não é um número inteiro. 
// Caso positivo, fará a taboada de soma
// Caso contrário, informará que o número é inválido.
if (Number.isInteger(numero)){
    for (let contador = 0; contador < 11; contador++){
        console.log (numero,"+",contador,"=",numero+contador)
    }
}else console.log ("Número inválido")
