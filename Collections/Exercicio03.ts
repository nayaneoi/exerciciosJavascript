import readlinesync = require("readline-sync");

const setNum: Set<number> = new Set<number>([]);

console.log("Digite 10 valores inteiros não repetidos: ");

for(let contador= 1; contador <11; contador ++){
    let num = readlinesync.questionInt();
    setNum.add(num);
}

console.clear();

console.log("Listar dados do Set: ");

for(let num of setNum){
    console.log(num);
}