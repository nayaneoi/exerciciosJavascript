const leia = require('readline-sync')
let nota1, nota2, nota3, nota4
console.log("Vamos calcular a sua nota média \nPor favor digite a primeira nota: ")
nota1 = leia.questionFloat()
console.log("\nDigite a segunda nota: ")
nota2 = leia.questionFloat()
console.log("\nDigite a terceira nota: ")
nota3 = leia.questionFloat()
console.log("\nDigite a quarta nota: ")
nota4 = leia.questionFloat()
media =  (nota1+nota2+nota3+nota4)/4
console.log("Sua média final é: "+ media)