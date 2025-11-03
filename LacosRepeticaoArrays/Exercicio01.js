const leia = require('readline-sync');

let numero1, numero2, contador;

console.log ("Digite o primeiro número do intervalo: ");
numero1 = leia.questionInt();

console.log ("Digite o último número do intervalo: ");
numero2 = leia.questionInt();

console.clear()

if(numero1 < numero2){
    console.log (`No intervalo entre ${numero1} e ${numero2} :`);
    for (let contador = numero1; contador <= numero2; contador++){
         if (contador%3 ==0 && contador%5 ==0){
            console.log(`${contador} é múltiplo de 3 e 5`)
        }
    }
}else if(numero1 > numero2){
    console.log("Intervalo inválido!");
}