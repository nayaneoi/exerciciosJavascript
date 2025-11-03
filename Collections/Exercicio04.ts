import readlinesync = require("readline-sync");

const setNum: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log(`Digite o número que você deseja encontrar: `);
let num = readlinesync.questionInt();

if (setNum.has(num)){
    console.log(`O número ${num} foi encontrado!`);
}else{
    console.log(`O número ${num} não foi encontrado!`)
}