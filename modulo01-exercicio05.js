// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
//
// Para o exercício, foram considerados os seguintes valores:
//
// Abaixo do peso: IMC menor que 18,5.
// Peso normal: IMC entre 18,5 e 24,9.
// Sobrepeso: IMC entre 25 e 29,9.
// Obesidade: IMC acima de 30.

const prompt = require ("prompt-sync") () // Habilitando entrada

// Capturando altura e peso
let altura = Number (prompt ("Digite a altura (em cm): "))
let peso = Number (prompt ("Digite o peso (em kg): "))

// Calculando o IMC
let imc = peso / ((altura / 100)**2)

// No primeiro if, verifica se o número não é negativo ou se não é um número. 
// Caso positivo, retorna a mensagem de dados inválidos.
// Caso contrário, categoriza o resultado de acordo com a tabela de IMC acima.
if ((imc < 0) || isNaN(imc)) {
    console.log ("Dados inválidos")
}else {
    if (imc < 18.5){
       console.log ("A pessoa está abaixo do peso")
       }else {
            if (imc < 25){
                console.log ("A pessoa está com o peso normal")
                }else {
                    if (imc < 30) {
                        console.log ("A pessoa está com sobrepeso")
                    } else {
                        console.log ("A pessoa está obesa")
                        }
                }
            }
        }






