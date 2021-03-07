let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// INSERINDO ELEMENTO NO FINAL
numeros[numeros.length] = 10;
console.log(numeros) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// usando PUSH
numeros.push(11);
numeros.push(12, 13);
console.log(numeros) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]


// INSERINDO ELEMENTO NA PRIMEIRA POSICAO

Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i>=0; i--){
        this[i] = this[i-1];
    }
    this[0] = value;
};
numeros.insertFirstPosition(-1);
console.log(numeros) // [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]

// usando UNSHIFT
numeros.unshift(-2);
numeros.unshift(-4, -3); 
console.log(numeros) // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
