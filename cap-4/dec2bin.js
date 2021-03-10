const Stack = require('./stack-object')


function decimalToBin(decimal) {
    const pilha = new Stack()
    let value = decimal;

    while (value !== 0){
        pilha.push(value % 2);
        value = Math.floor(value / 2);  // usar o Math.floor para arredondar para baixo
    }

    let bin = ''
    for (let key in pilha.items) {
        bin = `${pilha.items[key]}` + bin    
    }

    return bin
} 

console.log(decimalToBin(10)) // 1010
console.log(decimalToBin(100)) // 1100100
console.log(decimalToBin(800)) // 1100100000