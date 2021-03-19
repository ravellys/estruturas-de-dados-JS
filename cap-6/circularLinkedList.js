const { defaultEquals } = require("../utils/utils");
const { LinkedList } = require("./linkedList");

class CircularLinkedList extends LinkedList {
    constructor (equalFn = defaultEquals) {
        super(equalFn);
    }
}