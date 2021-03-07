let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// INSERINDO ELEMENTO NO FINAL
numeros[numeros.length] = 10;
console.log(numeros) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// usando PUSH
numeros.push(11);
console.log(numeros) // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]


// INSERINDO ELEMENTO NA PRIMEIRA POSICAO

Array.prototype.insertFirstPosition = function(value) {
    for (let i = this.length; i>=0; i--){
        this[i] = this[i-1];
    }
    this[0] = value;
};
numeros.insertFirstPosition(-1);
[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
console.log(numeros) // [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// usando UNSHIFT
numeros.unshift(-2);
console.log(numeros) // [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
