// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require ("prompt-sync") () // Habilitando entrada

// Capturando os números
let n1 = Number (prompt ("Digite o primeiro número: "))
let n2 = Number (prompt ("Digite o segundo número: "))

// No primeiro if, verifica se algum dos dados não são numerais. 
// Caso positivo, retorna a mensagem de dado(s) inválido(s).
// Caso contrário, verificará se os números são iguais. Caso positivo, informará que ele são iguais
// Caso contrário, escreverá os números de forma crescente.
if ((isNaN (n1)) || (isNaN (n2))) {
    console.log ("Valor(es) inválido(s)!")
}else{
    if (n1 === n2){
        console.log ("Os números são iguais!")
    } else {
        if (n1 > n2) console.log ("Os números, em ordem crescente, são", n2,"e", n1)
        else console.log ("Os números, em ordem crescente, são", n1,"e", n2)
    }
}
