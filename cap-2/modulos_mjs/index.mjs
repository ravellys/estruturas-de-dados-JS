import * as area from './calcArea.class.mjs';,,
import Book from './book.mjs';

console.log(area.circleArea(2));
console.log(area.squareArea(2));
console.log('\n');

const myBook = new Book('title')
myBook.printTitle();