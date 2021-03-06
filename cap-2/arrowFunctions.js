var circleAreaES5 = function circleArea(r) {
    var PI = 3.14;
    var area = PI * r * r;
    return area;
};
console.log(circleAreaES5(2)); // 12.56

// arrow functions

const circleArea = r => {
    const PI = 3.14;
    const area = PI * r * r;
    return area;
};
console.log(circleArea(2)); // 12.56

const circleArea2 = r => 3.14 * r * r;
console.log(circleArea2(2)) // 12.56

const hello = () => console.log('hello');
hello(); // hello