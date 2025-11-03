const leia = require('readline-sync');

let idade = 0
let totalMenor21 = 0
let totalMaior50 = 0

while (idade >=0) {
    console.log ("Digite uma idade: ");
    idade = leia.questionInt ();

if (idade >= 0 && idade <21){
   totalMenor21++;
}
if (idade > 50){
    totalMaior50++;
}
}

console.log("Total de pessoas menores de 21 anos: " + totalMenor21);

console.log("Total de pessoas maiores de 50 anos: " + totalMaior50);