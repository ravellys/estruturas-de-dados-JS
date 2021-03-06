function sum (x = 1, y = 2, z = 3) {
    return x + y + z;
}

let params = [3, 4, 5];
console.log(sum(...params)); // 12
console.log(sum.apply(undefined, params))

function restParameterFunction(x, y, ...a) {
    return (x + y) * a.length;
}

console.log(restParameterFunction(1, 2, 'hello', true, 7)); // 9