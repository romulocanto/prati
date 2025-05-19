// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// Inicializando as duas primeiras variáveis que irão receber os dois primeiros números da série
let fibo1 = 1
let fibo2 = 1

// No laço será imicializada uma terceira variável que auxiliará na troca dos números
for (let numero = 0; numero < 10; numero++){
    console.log (fibo1)
    let fibotemp = fibo1 + fibo2
    fibo1 = fibo2
    fibo2 = fibotemp
} 