// Operadores

var num = 0;
num = num + 2;
num = num + 3;
num = num / 2;
num ++;
num--;
num += 1; 
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('num == 1:' + (num == 1));
console.log('num === 1:' + (num === 1));
console.log('num != 1:' + (num != 1));
console.log('num > 1:' + (num > 1));
console.log('num < 1:' + (num < 1));
console.log('num >= 1:' + (num >= 1));
console.log('num <= 1:' + (num <= 1));
console.log('true && false' + (true && false));
console.log('true || false' + (true || false));
console.log('!true: ' + (!true));

// operador typeof

console.log('typeof num:', typeof num); // number
console.log('typeof Packt:', typeof 'Packt'); // string
console.log('typeof true:', typeof true); // boolean
console.log('typeof [1, 2, 3]:', typeof [1, 2, 3]); // object
console.log('typeof {name: john}:', typeof {name: 'John'}); // object


// há dois tipos de dados JS:
// 1. tipos de dados primitivos: null, undefined, string, number, boolean, symbol
// 2. tipos de dados derivados/objetos: objetos JS, funções, arrays e expressões regulares

// operador delete

var myObj = {name: 'Lucas', age: 24};
delete myObj.age
console.log('myObj: ', myObj) // myObj:  { name: 'Lucas' }

