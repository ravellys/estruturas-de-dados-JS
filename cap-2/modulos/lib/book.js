"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Book {
  constructor(title) {
    this.title = title;
  }

  printTitle() {
    console.log(this.title);
  }

}

exports.default = Book;