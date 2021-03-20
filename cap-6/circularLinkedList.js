const { defaultEquals } = require("../utils/utils");
const { LinkedList } = require("./linkedList");

class CircularLinkedList extends LinkedList {
    constructor (equalFn = defaultEquals) {
        super(equalFn);
    }

    insert (element, index) {
        if (index>=0 && index<=this.count) {
            const node = new Node(element);
            let current = this.head;

            if (index === 0) {

                if (this.head == null) {
                    this.head = node;
                    node.next = this.head;

                } else {
                    node.next = current;
                    this.head = node;
                    const last = this.getElementAt(this.count)
                    last.next = this.head;
                }
               
            } else if (index === this.count-1) {

            } else {
                const previous = this.getElementAt(index-1);
                node.next = previous.next
                previous.next = node;
            }
            this.count ++;
            return true;
        }
        return false
    }

    removeAt (index) {
        if (index>=0 && index<=this.count) {
            let current = this.head;

            if (index===0){
                if (this.count === 1) {
                    this.head = undefined
                } else {
                    const last = this.getElementAt(this.count);                    
                    this.head = current.next;
                    last.next = this.head;                    
                }

            } else {
                const previous = this.getElementAt(index-1);
                current = previous.next;
                previous.next = current.next;
            }            

            this.count --;
            return current.element
        }

        return undefined
    }


}