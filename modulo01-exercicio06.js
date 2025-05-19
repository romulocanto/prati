// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require ("prompt-sync") () // Habilitando entrada

// Capturando lados
let a = Number (prompt ("Digite o valor do lado A: "))
let b = Number (prompt ("Digite o valor do lado B: "))
let c = Number (prompt ("Digite o valor do lado C: "))

// Verificando Se os dados infromados podem formar um triângulo e se os dados informados são numéricos.
// Caso positivo, categorize o triângulo de acordo com dados informados.
// Caso contrário, informe que os dados não podem formar um triângulo.
if ((a < (b + c)) && (b < (a + c)) && (c < (a +b )) && !(isNaN (a)) && !(isNaN (b)) && !(isNaN (c))) {
    if ((a === b) && (b === c)){
        console.log ("O triângulo é equilátero")
    } else if ((a !== b) && (b !== c)){
        console.log ("O triânguclo é escaleno")
    } else {
        console.log ("o triângulo é isósceles")
    }
} else {
    console.log ("Dados inválidos")
}