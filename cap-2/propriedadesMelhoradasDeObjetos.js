// desestruturação de array
let [x, y] = ['a', 'b'];
    // let x = 'a';
    // let y = 'b';

// swap
[x, y] = [y, x];
    // var temp = x;
    // x = y;
    // y = temp;

// abreviação de propriedades
let obj = { x, y };
console.log(obj); // { x: 'b', y: 'a' }
    // var x = 'a';
    // var y = 'b';
    // var obj={x:x, y:y};
    // console.log(obj) // { x: 'b', y: 'a' }

// nome dos métodos abreviados
const hello = {
    name: 'abcdef',
    printHello() {
        console.log('Hello');
    }
};
hello.printHello(); // Hello
    // var hello = {
    //     name: 'abcdef',
    //     printHello: function printHello() {
    //         console.log('Hello');
    //     }
    // }
    // hello.printHello() // Hello