const leia = require('readline-sync')
let salariobruto, adicionalnoturno, horaextra, desconto, salarioliquido
console.log("Digite o Salário Bruto: ")
salariobruto = leia.questionFloat()
console.log("Digite o Adicional Noturno: ")
adicionalnoturno = leia.questionFloat()
console.log("Digite a hora extra: ")
horaextra = leia.questionFloat()
console.log("Digite o desconto: ")
desconto = leia.questionFloat()
salarioliquido = salariobruto+adicionalnoturno+(horaextra*5)-desconto
console.log("Seu salário líquido é= "+ salarioliquido.toFixed(2))
