// FILA
// Métodos:
//  enqueue: add elemento ao final
//  peek: primeiro elemento da fila
//  isEmpty: retorna se a fila está vazia   
//  size: tamanho da fila

class Queue {
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue (elemento) {
        this.items[this.count] = elemento;
        this.count ++;
    }

    dequeue () {
        if (this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount ++;
        return result
    }

    isEmpty () {
        return this.size() === 0;
    }

    peek () {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    size () {
        return this.count - this.lowestCount;
    }
    
    clear () {
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
    }

    toString () {

        if (this.isEmpty()) {
            return '';
        }

        let string = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            string = `${string},${this.items[i]}`;
        }

        return string;

    }

}

module.exports = Queue

// Usando a classe

if (require.main === module) {
    const queue = new Queue();
    console.log(queue.isEmpty()) // true
    queue.enqueue('John');
    queue.enqueue('Tiaguinho');
    queue.enqueue('Ailtinho');
    console.log(queue.toString()); // John,Tiaguinho,Ailtinho
    console.log(queue.size()) // 3
    console.log(queue.isEmpty()) // false
    queue.dequeue()
    queue.dequeue()
    console.log(queue.size()) // 1
    console.log(queue.toString()) // Ailtinho 
}
