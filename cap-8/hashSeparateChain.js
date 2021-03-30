const { defaultToString, ValuePair } = require("../utils/utils");
const {LinkedList} = require("../cap-6/linkedList");

class HashSepareteChain {
    constructor(toStrFn=defaultToString){
        this.table = {};
        this.toStrFn = toStrFn;
    }
    put (key, value){
        if (key!=null && value!=null) {
            const pos = this.hashCode(key)
            if (this.table[pos]==null) {
                this.table[pos] = new LinkedList()
            }
            this.table[pos].push(new ValuePair(key, value))
            return true
        }
        return false
    }
    get(key) {
        const tableKey = this.hashCode(key)
        if (tableKey == null) {
            return undefined
        }

        let linkedList = this.table[tableKey]
        if (linkedList != null && !linkedList.isEmpty()){
            let no = linkedList.getHead()
            while (no.element.key !== key) {
                console.log(no)
                no = no.next
            }
            return no.element.value;
        }
        return undefined              
    }
    remove(key) {
        if (key != null) {
            const tableKey =  this.hashCode(key);
            if (tableKey == null) {
                return false
            }
            const linkedList = this.table[tableKey]
            if (linkedList.size() === 1) {
                delete this.table[tableKey]
                return true
            }

            if (linkedList!=null && !linkedList.isEmpty()){
                let no = linkedList.getHead()
                while(no.element.key != key){
                    no = no.next
                }
                linkedList.remove(no.element)

                return true        
            }
            return false
        }
        return false
    }

    loseloseHashCode(key) {
        if (typeof key === 'number') {
            return key
        }
        const tablekey = this.toStrFn(key);
        const hash = tablekey.split('').reduce((acum,el) => acum += el.charCodeAt(0), 0);
        return hash%37
    }
    hashCode(key){
        return this.loseloseHashCode(key);
    }
}


if(require.main == module){
    const hash = new HashSepareteChain()
    hash.put('Jonathan', 'Jonathan@gmail.com')
    hash.put('Jamie', 'Jamie@gmail.com')
    hash.put('Sue', 'Sue@gmail.com')
    console.log(hash.get('Jamie')) // Jamie@gmail.com
    console.log(hash.remove('Jamie')) // Jamie@gmail.com

}