// FATORIAL INTERATIVO

function factorialInterative(number) {
    if (number < 0) return undefined
    let factorial = 1;
    for (let i=0; i<number; i++){
        factorial = factorial*(number-i)
    }
    return factorial
}

console.log(factorialInterative(5)) // 120


// FATORIAL RECURSIVO

function factorialRecursive(number) {
    if (number<0) return undefined;
    if (number <= 1) return 1; // caso base
    return number*factorialRecursive(number-1)
}

console.log(factorialRecursive(5)) // 120