const {defaultEquals, Node, DoublyNode} = require("../utils/utils")
const {LinkedList} = require("./linkedList") 


class DoublyLinkedList extends LinkedList {
    constructor(equalsFn=defaultEquals){
        super(equalsFn);
        this.tail = undefined;
    }

    insert (element, index) {
        if (index>=0 && index <=this.count) { 
            const node = new DoublyNode(element);
            let current = this.head;
            if (index===0) {
                if (this.head == null){
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    this.head.prev = node
                    this.head = node
                }

            } else if (index===this.count) {
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                node.prev = previous;
                current.prev = node;
                previous.next = node;
            }
            this.count ++;
            return true
        }

        return false;
    }

    removeAt (index) {

    }


}