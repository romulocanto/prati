// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require ("prompt-sync") () // Habilitando entrada

// Inicializando as variaveis que contará o número de números inseridosm o somatório desses números e um número temporário para uso no laço
let contador = 0
let somatorio = 0
let temp = 1

// Enquanto não for digitado 0, o laço irá colocar o número digitado e acrescentar à variável somatorio
// E, a cada laço, o contador será acrescido de 1
// A variável temporária receberá o valor do número digitado para poder validar o loop
while (temp != 0) {
    let numero = Number (prompt ("Digite o número: "))
    contador++
    somatorio = somatorio + numero
    temp = numero
}

// Exibindo a média aritimética 
console.log ("A média aritimética é: ",somatorio / (contador - 1))