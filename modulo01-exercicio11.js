// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require ("prompt-sync") () // Habilitando entrada

// Inicializando a variável que vai receber a soma 
let soma = 0

// Iniciando o loop 
for (let contador = 1; contador < 6; contador++){
    // Capturando o número
    let numero = Number (prompt ("Digite o número: ")) 
    // Adicionando o número ao somatório
    soma = soma + numero
}

// Exibindo o total.
console.log (soma)
