// CONCAT
// Junta vários arrays em uma cópia dos arrays concatenados

const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log('números concatenados:' + numbers) // [ -3, -2, -1, 0, 1, 2, 3 ]


// EVERY
// Itera por todos os elementos do array, verificando uma condição desejada,
// até que false seja devolvido.
// Verifica se todos os elementos atendem a condição.
const isEven = x => x%2 === 0; // é par?
console.log('todos são par?:' + numbers.every(isEven)) // false


// SOME
// Itera sobre o array até que algum true seja devolvido
console.log('Algum é par?:' + numbers.some(isEven)) // true


// FOREACH
// Executa uma função em cada elemento do array
let pares = [];
numbers.forEach(x => pares.push(isEven(x)));
console.log('números pares:' + pares); // [ false, true, false, true, false, true, false ]


// MAP
// cria outro array a partir de uma função que contém o critério e devolve os
// elementos do array que correspondem ao critério.
const myMap = numbers.map(isEven);
console.log('números pares:' + myMap); // [ false, true, false, true, false, true, false ]


// FILTER 
// cria um array com todos os elementos avaliados com true pela função especificada
const myFilter = numbers.filter(isEven);
console.log('números pares:' + myFilter); // [ -2, 0, 2 ]


// REDUCE
// recebe uma função com os parametos: previousValue, currentValue, index (opcional) e array (opcional)
// pode ser utilizado para acumular valores em um array
let acum = numbers.reduce((previous, current) => previous + current);
console.log('acumulado dos valores: ' + acum); // 0


// JOIN
// reune todos os elementos de um array num string
console.log('numeros em string: ' + numbers.join()); // -3,-2,-1,0,1,2,3
console.log('tipo: ' + typeof numbers.join()); // string


// TOSTRING
// devolve array no formato de string
console.log('numeros em string: ' + numbers.toString()); // -3,-2,-1,0,1,2,3


// valueOf
// semelhante ao toSting
console.log('numeros em string: ' + numbers.valueOf()); // -3,-2,-1,0,1,2,3


// slice
// devolve um novo array apartir dos indices especificados
let newArray = numbers.slice(2, 5);
console.log('slice: ' + newArray);

// 
