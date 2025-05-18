// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require ("prompt-sync") () // Habilitando entrada

// Lista opções
console.log ("╔════════════════════════════════╗")
console.log ("║ Qual é o melhor time do Brasil ║")
console.log ("║ Opção A: Bahia                 ║")
console.log ("║ Opção B: Grêmio                ║")
console.log ("║ Opção C: Votuporanguense       ║")
console.log ("╚════════════════════════════════╝")

// Capturando a escolha
let escolha = (prompt ("Escolha a opção: "))

// O switch irá verificar as opções (considerando maiúsculas e minúsculas). 
// Caso a resposta não se encaixe nas opções, retorna mensagem de opção inválida
switch (escolha){
     case (("A") || ("a")): console.log ("Você escolheu Bahia")
     break;
     case (("B") || ("b")): console.log ("Você escolheu Grêmio")
     break;
     case (("C") || ("c")): console.log ("Você escolheu Votuporanguense")
     break;
     default: console.log ("Você não escolheu uma opção válida")
     break;
 }