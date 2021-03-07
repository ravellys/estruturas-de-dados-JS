let daysOfWeek = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']

for (let i = 0; i < daysOfWeek.length; i++) {
    console.log(daysOfWeek[i])
}

// IMPRIMINDO A SEQUENCIA DE FIBONACCI

const fibonacci = [1, 1];
const numeros = 20;
for (let i = 2; i < numeros; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 0; i < fibonacci.length; i++) {
    console.log(fibonacci[i])
}