const { defaultEquals } = require("../utils/utils");
const { LinkedList } = require("./linkedList");

const defaultCompare = (a, b) => { return a < b }


class SortedListLinked extends LinkedList {
    constructor(equalsFn=defaultEquals, compareFn=defaultCompare) {
        super(equalsFn);
        this.compareFn = compareFn;
    }

    insert(element, index=0) {
        if (this.isEmpty()){
            return super.insert(element, 0);
        }
        const pos = this.getIndexNextSortedElement(element);
        return super.insert(element, pos);
    }

    getIndexNextSortedElement(element) {
        let current = this.head;
        let i = 0;
        for (; i < this.size() && current; i++) {
            if (this.compareFn(element, current.element)){
                return i
            }
            current = current.next
        }
        return i
    }

}


const sll = new SortedListLinked();
sll.insert(12)
sll.insert(78)
sll.insert(3)
sll.insert(11)

console.log(sll.toString())