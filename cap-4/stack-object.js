// Stack baseada em objeto
// métodos: push, pop, peek, isEmpty, clear e size

class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    push(element) {
        this.items[this.count] = element
        this.count ++;
    }
    pop() {
        if (this.isEmpty()){
            return undefined
        }

        this.count --; 
        const elemento = this.items[this.count];
        delete this.items[this.count];
        return elemento;
    }
    peek(){
        return this.items[this.count - 1];
    }
    isEmpty(){
        return this.count === 0;
    } 
    clear(){
        this.items = {}
        this.count = 0
    }
    size(){
        return this.count
    }
    tostring(){
        if (this.count === 0) {
            return ''
        }
        let string = this.items[0]
        for (let i = 1; i < this.count; i++){
            string = `${string},${this.items[i]}`
        }
        return string
    }
}

if (require.main === module){
    let pilha = new Stack();
    console.log(pilha.items) // {}
    pilha.push(1)
    pilha.push(2)
    pilha.push(3)
    console.log(pilha.items) // { '0': 1, '1': 2, '2': 3 }
    pilha.pop()
    console.log(pilha.items) // { '0': 1, '1': 2 }
    console.log(pilha.peek()) // 2
    console.log(pilha.size()) // 2
    console.log(pilha.tostring()) //
    pilha.clear()
    console.log(pilha.items) // {}
    console.log(pilha.peek()) // undefined
}

module.exports = Stack;
