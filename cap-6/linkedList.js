const { defaultEquals, Node } = require("../utils/utils");

// Lista encadeada
class LinkedList {
    constructor (equalsFn=defaultEquals) {
        this.head = undefined;
        this.equalsFn = equalsFn;
        this.count = 0;
    } 

    push (element) {
        const node = new Node(element);

        if (this.isEmpty()) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) { // obter o ultimo item
                current = current.next;
            }
            current.next = node; // liga lista ao novo nó
        }

        this.count ++;
    }

    insert (element, index) {
        if (index>=0 && index<=this.count){
            const node = new Node (element);
            
            if (index===0){
                node.next = this.head;
                this.head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }        
            this.count ++; 
            return true
        }

        return false
    }

    getElementAt (index) {
        if (index>=0 && index<=this.count){
            let current = this.head
            for (let i = 0; i < index && current != null; i++) {
                current = current.next;     
            }
            return current
        }
        return undefined
    }  

    remove (element) {
        const index = this.indexOf(element);
        return this.removeAt(index)
    }

    indexOf (element) {
        let current = this.head;
        for (let i = 0; i < this.count && current != null; i++) {
            if (this.equalsFn(element, current.element)){
                return i
            }
            current = current.next
        }
        return -1
    }

    removeAt (index) {
        let current = this.head;

        if (index === 0) {
            this.head = this.head.next;
        } else {
            const previous = this.getElementAt(index-1);
            current = previous.next
            previous.next = current.next
       
        }

        this.count --;
        return current.element        
    }

    isEmpty () {
        return this.size() === 0;
    }

    size () {
        return this.count;
    }

    getHead(){
        return this.head()
    }

    toString () {
        if(this.isEmpty()) {
            return ''
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        while (current != null) {
            objString = `${objString}, ${current.element}`;
            current = current.next;
        }
        return objString
    }
}

if (require.main == module) {
    let linkedList = new LinkedList();
    linkedList.push(0)
    linkedList.push(1)
    linkedList.push(2)

    console.log(linkedList.toString()) // 0, 1, 2
    console.log(linkedList.indexOf(2)) // 2

    console.log(linkedList.removeAt(1)) // 1

    console.log(linkedList.toString()) // 0, 2
    console.log(linkedList.indexOf(2)) // 1
}



module.exports = {
    LinkedList
}
