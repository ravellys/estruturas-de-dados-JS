// Progamação orientada a objetos JS

//criar objetos
var obj = new Object();
var obj = {};
obj = {
    name:{
        first: 'Gandalf',
        last: 'the Grey'
    },
    address: 'Middle Earth'
}


// declarando classe que representa um livro

function Book(title, page, isbn){
    this.title = title;
    this.page = page;
    this.isbn = isbn;
}

// instanciando classe
var book = new Book('title', 'pag', 'isbn')

// acessando propriedades

console.log(book.title) // title
console.log(book.page) // pag
console.log(book.isbn) // isbn

// inserindo método na classe

Book.prototype.printTitle = function() { //prototype compartilha a função com todas as instancias
    console.log(this.title)
}

book.printTitle(); // title


function Book(title, page, isbn){
    this.title = title;
    this.page = page;
    this.isbn = isbn;
    this.printIsbn = function(){
        console.log(this.isbn);
    }
}

book.printIsbn();