// Nó
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

// Nó duplo

class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
    }
} 

// função padrão
exports.defaultEquals = (a, b) => {return a === b}

module.exports = {
    defaultEquals: (a, b) => {return a === b},
    Node, 
    DoublyNode
}