// FIBONACCI INTERATIVO

function fibonacciInterative(n) {
    if (n<1) return 0;
    if (n <= 2) return 1;
    let fib0 = 0;
    let fib1 = 1;
    let fibn;
    for (let i = 2; i<=n; i++){
        fibn = fib0 + fib1;
        fib0 = fib1;
        fib1 = fibn;
    }
    return fibn
}

console.log(fibonacciInterative(7)) // 13
console.log(fibonacciInterative(3)) // 2
console.log(fibonacciInterative(0)) // 0


// FIBONACCI RECURSIVA

function fibonacciRecursive(n) {
    if (n<1) return 0;
    if (n<=2) return 1;
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2) 
}

console.log(fibonacciRecursive(7)) // 13
console.log(fibonacciRecursive(3)) // 2
console.log(fibonacciRecursive(0)) // 0


// FIBONACCI RECURSIVA COM MEMOIZATION

function fibonacciMemoization (n) {
    let memo = {0: 0, 1: 1}
    
    const fibonacciRecursiveMemo = (n, memo) => {
        if (!(n in Object.keys(memo))) {
            memo[n] = fibonacciRecursiveMemo(n-1, memo) + fibonacciRecursiveMemo(n-2, memo) 
        } 
        return memo[n]
    }
    return fibonacciRecursiveMemo(n, memo)
}

console.log(fibonacciMemoization(7)) // 13
console.log(fibonacciMemoization(3)) // 2
console.log(fibonacciMemoization(0)) // 0
