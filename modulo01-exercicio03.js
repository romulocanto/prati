// Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
//
// Para o exercício, foram considerados os seguintes valores:
//
// Menos de 4: Reprovado
// Acima de 4 e abaixo de 6: Em recuperação
// Acima de 6: Aprovado

const prompt = require ("prompt-sync") () // Habilitando entrada

// Capturando a nota
let nota = Number (prompt ("Digite a nota: "))

// No primeiro if, verifica se o número não está abaixo de zero ou não está acima de 10 e se a resposta não é um número. 
// Caso positivo, retorna mensagem de nota inválida.
// Caso contrário, categoriza a nota de acordo com dado fornecido.
if ((nota < 0) || (nota > 10) || isNaN(nota)){
    console.log ("Nota inválida")
}else if (nota < 4){
    console.log ("O aluno foi reprovado")
}else if (nota < 6) {
    console.log ("O aluno está em recuperação")
}else {
    console.log ("O aluno foi aprovado")
}
