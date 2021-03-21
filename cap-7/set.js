// Classe Conjunto

class Set {
    constructor(){
        this.items = {}
    }
    add(element){
        this.items[element] = element;
        return true
    }
    delete(element){
        if(this.has(element)){
           delete this.items[element];
            return true;
        }
        return false;
    }
    has(element){
       // return element in this.items
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    clear(){
        this.items = {};
    }
    size(){
        return Object.keys(this.items).length;
    }
    values(){
        return Object.values(this.items);
    }
    union(otherSet){
        const union = new Set();
        this.values().forEach(element => { union.add(element)});
        otherSet.values().forEach(element => { union.add(element)});
        return union;
    }
    intersection(otherSet){
        const intersectionSet = new Set();
        let bigSet = this.values();
        let smallSet = otherSet.values(); 
        if (this.size() < otherSet.size()){
            [bigSet, smallSet] = [smallSet, bigSet];            
        }
        console.log("bigset", bigSet);
        console.log("smallSet", smallSet)

        smallSet.forEach(element => {
            if (bigSet.includes(element)) {
                intersectionSet.add(element);
            }            
        });
        return intersectionSet;

    }
    difference(otherSet){
        const differenceSet = new Set();
        this.values().forEach(element => {
            if(!otherSet.has(element)){
                differenceSet.add(element);
            }
        });
        return differenceSet;
    }
    isSubsetOf(otherSet){
        if (this.size() > otherSet.size()){
            return false
        }
        let isSubset = true
        this.values().every(element => {
            if (!otherSet.has(element)){
                isSubset = false
                return false
            }
            return true
        })
        return isSubset
    }
}

if (require.main === module) {
    const set = new Set();
    set.add(1);
    set.add(3);
    set.add(4);
    console.log(set.values()) // [ 1, 3, 4 ]
    set.add(1)
    console.log(set.values()) // [ 1, 3, 4 ]
    set.delete(1)
    console.log(set.values()) // [ 3, 4 ]
    set.delete(7)
    console.log(set.values()) // [ 3, 4 ]
    console.log(set.size()) // 2

    const otherSet = new Set();
    otherSet.add(1);
    otherSet.add(7);
    
    const union = set.union(otherSet);
    console.log(union.values()) // [1, 3, 4,  7]

    const intersectionSet = set.intersection(union);
    console.log(intersectionSet.values()) // [3, 4]

    const differenceSet = set.difference(union);
    console.log(differenceSet.values()) // []

    const differenceSet2 = union.difference(set);
    console.log(differenceSet2.values()) // [1, 7]

    console.log(union.isSubsetOf(set)) // false
    console.log(set.isSubsetOf(union)) // true
    console.log(union.isSubsetOf(union)) // true
}


