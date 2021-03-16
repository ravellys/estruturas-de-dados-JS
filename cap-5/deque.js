// FILA DUPLAMENTE ENCADEADA
// Métodos:
//  addFront / addBack: add elemento a frente e ao final, respectivamente
//  removeFront / removeBack: remove o primeiro elemento da frente e de tras
//  isEmpty: retorna se a fila está vazia   
//  size: tamanho da fila

class Deque {
    constructor(){
        this.ultimoElemento = 0;
        this.primeiroElemento = 0;
        this.items = {};
        this.size = 0;
    }

    _add (elemento, pos) {
        if (this.isEmpty()) {
            this.primeiroElemento = pos;
            this.ultimoElemento = pos;
        }
        this.items[pos] = elemento;
        this.size ++;
    }

    addFront (elemento) {
        if (!this.isEmpty()){
            this.primeiroElemento--;
        }
        this._add(elemento, this.primeiroElemento);
    }

    addBack (elemento) {
        if (!this.isEmpty()){
            this.ultimoElemento ++;
        }
        this._add(elemento, this.ultimoElemento);
    }

    _remove (pos) {
        if (this.isEmpty()){
            return undefined;
        }
        this.size --;
        const result = this.items[pos];
        delete this.items[pos];
        return result;
    }
    
    removeFront () {
        const result = this._remove(this.primeiroElemento);
        this.primeiroElemento ++;
        return result;
    }

    removeBack () {
        const result = this._remove(this.ultimoElemento);
        this.ultimoElemento --;
        return result;
    }

    isEmpty () {
        return this.size === 0;
    }

    peekFront () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.primeiroElemento];
    }


    peekBack () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.ultimoElemento];
    }
   
    
    clear () {
        this.items = {};
        this.lowestCount = 0;
        this.count = 0;
        this.size = 0;
    }

    toString () {

        if (this.isEmpty()) {
            return '';
        }

        let string = `${this.items[this.primeiroElemento]}`;
        for (let i = this.primeiroElemento + 1; i <= this.ultimoElemento; i++) {
            string = `${string},${this.items[i]}`;
        }

        return string;

    }

}

module.exports = Deque;

// Usando a classe
if (require.main === module){
    const deque = new Deque();
    
    console.log(deque.isEmpty()) // true
    
    deque.addFront('pandinha');
    deque.addFront('Tiaguinho');
    console.log(deque.toString()); // Tiaguinho,pandinha
    
    deque.addBack('Ailtinho')
    console.log(deque.toString()); // Tiaguinho,pandinha,Ailtinho

    
    deque.addBack('Mago')
    console.log(deque.toString()); // Tiaguinho,pandinha,Ailtinho,Mago
    console.log(deque.size) // 4

    console.log(deque.removeBack()); // Mago
    console.log(deque.size) // 3
    console.log(deque.removeBack()); // Ailtinho
    console.log(deque.size) // 2

    console.log(deque.removeFront()) // Tiaguinho
    console.log(deque.removeFront()) // pandinha
    console.log(deque.size) // 0

    deque.addBack('Ailtinho')
    console.log(deque.toString()); // Ailtinho
    
    deque.addFront('Mago')
    console.log(deque.toString()); // Mago,Ailtinho
    console.log(deque.size) // 2

    console.log(deque.removeFront()) // Mago
    deque.addBack('pandinha')  
    console.log(deque.toString()) // Ailtinho,pandinha

    deque.addFront('Mago'); 

    console.log(deque.toString()) // Mago,Ailtinho,pandinha
    console.log(deque.peekBack()) // pandinha
    console.log(deque.peekFront()) // Mago
}
