// Nó
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}

// função padrão
exports.defaultEquals = (a, b) => {return a === b}

module.exports = {
    defaultEquals: (a, b) => {return a === b},
    Node
}