let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


// ITERANDO COM O LAÇO FOR 'OF'
for (const n of numbers){
    console.log( n % 2 === 0 ? 'even' : 'odd');
}


// OBJETO @@iterator
// @@iteratos devolve um objeto iterador contendo os pares chave valor de um array
let iterator = numbers[Symbol.iterator]();
console.log(iterator) // Object [Array Iterator] {}
console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next()) // { value: 2, done: false }
iterator = numbers[Symbol.iterator]();
for (const n of iterator){
    console.log(n)
}
// quando não tiver mais valores para iterar será devolvido undefined


// MÉTODOS ENTRIES, KEYS E VALUES DE ARRAY
// entries
let aEntries = numbers.entries();
console.log(aEntries); // Object [Array Iterator] {}
console.log(aEntries.next()); // { value: [ 0, 1 ], done: false }
console.log(aEntries.next()['value']); // [ 1, 2 ]

// keys
let aKeys = numbers.keys();
console.log(aKeys); // Object [Array Iterator] {}
console.log(aKeys.next()); // { value: 0, done: false }

// values
let aValues = numbers.values();
console.log(aValues); // Object [Array Iterator] {}
console.log(aValues.next()); // { value: 1, done: false }


// MÉTODO 'FROM'
// cria outro array a partir de um existente
let numbersCopy = Array.from(numbers);
console.log(numbersCopy); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
numbersCopy.pop();
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
let numbersRef = numbers;
console.log(numbersRef); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
numbersRef.pop();
console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

// mapea valores
let evens = Array.from(numbers, x => (x%2 === 0))
console.log(evens) // [ false, true, false, true, false, true, false, true, false, true, false, true, false, true ]

// MÈTODO 'OF'
// cria um array a partir dos argumentos passados
let numbers3 = Array.of(1);
let numbers4 = Array.of(1,2,3,4,5);
console.log(numbers3); // [1]
console.log(numbers4); // [1, 2, 3, 4, 5]

let numbers4Copy = Array.of(...numbers4); // o mesmo que Array.from(numbers4)
console.log(numbers4Copy); // [1, 2, 3, 4, 5]


// MÉTODO 'FILL'
// preenche um array com um valor
console.log(numbersCopy.fill(0)); // [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
console.log(numbersCopy.fill(1, 3, 10)) // [ 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0 ]
let ones = Array(6).fill(1);
console.log(ones); //[ 1, 1, 1, 1, 1, 1 ]


// MÉTODO 'COPYWITHIN'
// copia uma sequencia de valores de uma array para um indice de inicio
let copyArray = [1,2,3,4,5,6];
copyArray.copyWithin(0,3); 
console.log(copyArray); // [ 4, 5, 6, 4, 5, 6 ]

copyArray = [1,2,3,4,5,6];
copyArray.copyWithin(1, 3, 5)
console.log(copyArray); // [ 1, 4, 5, 4, 5, 6 ]


// MÉTODO 'REVERSE'
console.log(numbers.reverse()); // [ 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]


// MÉTODO 'SORT'
// ordena como se todos os elementos fossem strings
console.log(numbers.sort()); // [ 1, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(numbers.sort((a,b) => a-b)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]


// ORDENAÇÃO PERSONALIZADA
const friends = [
    { name: 'John', age: 30},
    { name: 'Ana', age: 31},
    { name: 'Chris', age: 25},
]
console.log(friends.sort());
// [ { name: 'John', age: 30 },
//   { name: 'Ana', age: 31 },
//   { name: 'Chris', age: 25 } ] 


const compare = (a,b) => { return (a.age >= b.age ? 1 : -1) }
console.log(compare({age: 1}, {age: 2})) // -1
console.log(friends.sort(compare));
// [ { name: 'Chris', age: 25 },
//   { name: 'John', age: 30 },
//   { name: 'Ana', age: 31 } ]


// ORDENANDO STRINGS
// são ordenados segundo a tabela ASCII
let nomes = ['Ana', 'Carlos', 'ana', 'carlos'];
console.log(nomes.sort()); // [ 'Ana', 'Carlos', 'ana', 'carlos' ]


// PESQUISA
// indexOf
console.log(numbers.indexOf(10)); // 9
console.log(numbers.indexOf(100)); // -1

// lastIndexOf
numbers.push(10);
console.log(numbers.lastIndexOf(10)); // 14

// find
const multipleOf13 = x => x%13 === 0; 
console.log(multipleOf13(1)); // false
console.log(multipleOf13(13)); // true
console.log(numbers.find(multipleOf13)); // 13

// findIndex
console.log(numbers.findIndex(multipleOf13)); // 12

// includes
console.log(numbers.includes(12)); // true
console.log(numbers.includes(20)); // false
