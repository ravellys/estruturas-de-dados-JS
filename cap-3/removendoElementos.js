let numeros = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];

// REMOVENDO NO FINAL
numeros.pop()
console.log(numeros) // [ -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]


// REMOVENDO NO INICIO
Array.prototype.removeFirstPosition = function(){
    for(let i=0; i<this.length; i++) {
        this[i] = this[i + 1]
    }
    this.pop() // remove elemento undefined no final
}
numeros.removeFirstPosition();
console.log(numeros) // [ -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// usando SHIFT
numeros.shift()
console.log(numeros) // [ -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


// ADCIONANDO E REMOVENDO DE UMA POSIÇÃO ESPECIFICA "SPLICE"

numeros.splice(5, 3); // 1º arg - posição; 2º arg quantidade
console.log(numeros) // [ -2, -1, 0, 1, 2, 6, 7, 8, 9, 10, 11, 12 ]


