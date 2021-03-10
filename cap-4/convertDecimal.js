const Stack = require('./stack-object')

function baseConverter(decimal, base){
    if (base > 36 || base <2){
        return ''
    }

    let conversao = '';
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const pilha = new Stack();    
    let value = decimal;
    let resto;

    while (value !== 0 ) {
        resto = Math.floor( value % base );
        pilha.push(digits[resto])
        value = Math.floor(value / base);
    }

    for (let key in pilha.items) {
        conversao = `${pilha.items[key]}` + conversao;
    }

    return conversao
}

console.log(baseConverter(10, 2)) // 1010
console.log(baseConverter(100, 2)) // 1100100
console.log(baseConverter(100345, 8)) // 303771
console.log(baseConverter(100345, 16)) // 187F9
console.log(baseConverter(100345, 35)) // 2BW0


