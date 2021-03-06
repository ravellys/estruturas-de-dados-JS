import { circleArea, squareArea } from './calcArea.class.js';
import Book from './book.js';

console.log(circleArea(2));
console.log(squareArea(2));
console.log('\n');

const myBook = new Book('title');
myBook.printTitle();