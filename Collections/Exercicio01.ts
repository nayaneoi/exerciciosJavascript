import readlinesync = require("readline-sync");

let  cores: Array<String> = new Array<String>();

console.log(`Digite 5 cores: `);

for(let contador= 1; contador <6; contador ++){
    let cor =readlinesync.question();
    cores.push(cor)
    
}

console.clear();

console.log(`\nListar todas as cores: `);

for (let cor of cores){
    console.log(cor);
}

console.log(`\nOrdenar as cores: `);

cores.sort();

for(let cor of cores){
    console.log(cor);
}