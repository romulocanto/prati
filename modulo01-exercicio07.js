// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require ("prompt-sync") () // Habilitando entrada

// Capturando quantas maças foram compradas
let macas = Number (prompt ("Quantas maças foram compradas "))

// No primeiro if, verifica se o número não é negativo ou se não é um número. 
// Caso positivo, retorna a mensagem de valor inválido.
// Caso contrário, faz o cálculo da compra de acordo com a quantidade de maças.
if ((macas < 0) || (isNaN (macas))) {
    console.log ("Valor inválido!")
}else{
    if (macas < 12){
        console.log ("O valor total da compra foi de R$", (macas * 0.30))
    } else console.log ("O valor total da compra foi de R$", (macas * 0.25))
}




