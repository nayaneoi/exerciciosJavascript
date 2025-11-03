const leia = require("readline-sync");
let vetorinteiros =[2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numero;
let encontrado = false;


console.log("Digite o número que você deseja encontrar: ");
numero = leia.questionInt()

for (let indice = 0; indice < vetorinteiros.length; indice ++){
    if (vetorinteiros[indice]===numero){
        console.log(`O número ${numero} está localizado na posição: ${indice}`);
        encontrado = true;
        break;
    }
}
if (encontrado==false){
    console.log(`O número ${numero} não foi encontrado!`);
}