// Criando uma classe stack baseada em array
// métodos: push, pop, peek, isEmpty, clear e size

class Stack {
    constructor(){
        this.items = []
    }
    push(element) {
        this.items[this.items.length] = element;
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length-1];        
    }
    isEmpty(){
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }   
    size() {
        return this.items.length;
    }
}

let pilha = new Stack();
console.log(pilha.items) // []
pilha.push(1)
pilha.push(2)
pilha.push(3)
console.log(pilha.items) // [1, 2, 3]
pilha.pop()
console.log(pilha.items) // [1, 2]
console.log(pilha.peek()) // 2
console.log(pilha.size()) // 2
pilha.clear()
console.log(pilha.items) // []


