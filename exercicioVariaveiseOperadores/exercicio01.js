const leia = require('readline-sync')
let salario, abono
console.log("Digite o Salário: ")
salario = leia.questionFloat()
console.log("Digite o Abono: ")
abono = leia.questionFloat()
novosalario = salario + abono
console.log("Novo Salário = " + novosalario)

