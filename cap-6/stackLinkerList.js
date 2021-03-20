const DoublyLinkedList = require("./doublyLinkedList")

class StackLinkedList {
    constructor(){
        this.items = new DoublyLinkedList();    
    }
    push(element){
        return this.items.push(element);
    }
    pop() {
        if (this.isEmpty()){
            return undefined 
        } 

        return this.items.removeAt(this.size()-1)
    }
    peek(){
        if (this.isEmpty()){
            return undefined
        }
        return this.items.getElementAt(this.size()-1).element;
    }
    isEmpty(){
        return this.items.isEmpty();
    }
    size(){
        return this.items.size();
    }
    clear(){
        return this.items.clear();
    }
    toString(){
        return this.items.toString();
    }
}