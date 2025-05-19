// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require ("prompt-sync") () // Habilitando entrada

 // Capturando o número
let numero = Number (prompt ("Digite o número: "))

// Salvando o número para o laço.
let temp = numero

// Inicializando a variável que irá receber o resultado.
let resultado = 1

// O laço foi criado dessa forma pois não acho necessário ele fazer uma repetição para multiplicar por 1...
for (temp - 1; temp > 1; temp--){
    resultado = resultado * temp
    console.log (temp,resultado)
}


// Exibindo o resultado.
console.log ("O resultado do fatorial de",numero,"é",resultado)