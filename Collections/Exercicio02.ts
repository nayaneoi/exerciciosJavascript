import readlinesync = require("readline-sync");

let numeros: Array<number> = new Array<number>(2, 5, 1, 3, 4, 9, 7, 8, 10, 6);

console.log(`Digite o número que você deseja encontrar: `);
let num = readlinesync.questionInt();

if (numeros.includes(num)){
    console.log(`O número ${num} está localizado na posição: ${numeros.indexOf(num)} `);
}else{
    console.log(`O número ${num} não foi encontrado!`)
}