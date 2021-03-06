const area = require('./lib/calcArea.class');
const Book = require('./lib/book');

console.log(area.circleArea(2));
console.log(area.squareArea(2));
console.log(typeof Book)
const newBook = new Book.default('title')
newBook.printTitle();