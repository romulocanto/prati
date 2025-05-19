// Crie um programa que classifica a idade de uma pessoa em categorias (criança,adolescente, adulto, idoso) 
// com base no valor fornecido, utilizando uma estrutura de controle if-else. 
//
// Para o exercício, foram considerados os seguintes valores:
//
// 0 a 11: Criança
// 12 a 17: Adolescente
// 18 a 64: Adulto
// acima de 65: Idoso 



const prompt = require ("prompt-sync") () // Habilitando entrada

// Capturando a idade
let idade = Number (prompt ("Digite a idade: "))

// No primeiro if, verifica se o número não é negativo ou se não é um número. 
// Caso positivo, retorna a mensagem de idade inválida.
// Caso contrário, categoriza a idade de acordo com dado fornecido.
if ((idade < 0) || (isNaN (idade))) {
    console.log ("Idade inválida")
}else {
    if (idade < 12){
       console.log ("A idade é de uma criança")
       }else {
            if (idade < 18){
                console.log ("A idade é de um adolescente")
                }else {
                    if (idade < 65) {
                        console.log ("A idade é de um adulto")
                    } else {
                        console.log ("A idade é de um idoso")
                        }
                }
            }
        }