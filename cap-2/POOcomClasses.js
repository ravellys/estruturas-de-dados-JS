// CLASSES

class Book {
    constructor(title, pages, isbn){
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn(){
        console.log(this.isbn);
    }
};

let book = new Book('title', 'pags', 'isbn');
console.log(book.title); // title
book.title = 'new title';
console.log(book.title); // new title


// HERANÇAS

class ITBook extends Book {
    constructor(title, pages, isbn, tecnhnology) {
        super(title, pages, isbn);
        this.tecnhnology = tecnhnology;
        
    }
    printTechnology() {
        console.log(this.tecnhnology);
    }
};
let jsBook = new ITBook('Learning JS', '200', '123', 'JS');
jsBook.printIsbn(); //123
jsBook.printTechnology(); //JS
console.log(jsBook.title); // Learning JS

// TRABALHANDO COM GETTERS E SETTERS

class Person {
    constructor(name) {
        this._name = name; // atributo privado
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
};

let person = new Person('Frodo');
console.log(person.name) // Frodo // usando a função get
person.name = 'Gandalf'; // usando a função set
console.log(person.name) // Gandalf
