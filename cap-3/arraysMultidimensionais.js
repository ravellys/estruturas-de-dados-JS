let tempDay1 = [78, 75, 79];
let tempDay2 = [80, 90, 100];
let temp = [tempDay1, tempDay2];

// INTERANDO PELO ARRAY
function printMatrix(myMatrix) {
    for (let i = 0; i < myMatrix.length; i++) {
        let linha = myMatrix[i];
        for (let j = 0 ; j < linha.length; j++) {
            console.log(linha[j])
        }
    }
};

printMatrix(temp);

// ARRAYS MULTIDIMENSIONAIS

let matrix3x3x3 = []

for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [ ]
    for (let j = 0; j < 3; j++){
        matrix3x3x3[i][j] = []
        for (let z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }

}
console.log(matrix3x3x3)