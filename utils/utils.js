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

// Par de valores

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString () {
        return `#${this.key}: ${this.value}`;
    }
}

// função padrão
exports.defaultEquals = (a, b) => {return a === b}

// padrão para string
const defaultToString = (item) => {
    if (item === null) {
        return 'NULL';
    } else if (item === undefined) {
        return 'UNDEFINED';
    } else if (typeof item === 'string' || item instanceof String) {
        return `${item}`;
    }
    return item.toString();
}

module.exports = {
    defaultEquals: (a, b) => {return a === b},
    defaultToString : defaultToString,
    Node, 
    DoublyNode,
    ValuePair
}