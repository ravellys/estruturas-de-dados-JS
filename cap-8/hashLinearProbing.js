const { defaultToString, ValuePair } = require("../utils/utils");
const {LinkedList} = require("../cap-6/linkedList");

class HashLinearProbing {
    constructor(toStrFn=defaultToString){
        this.table = {};
        this.toStrFn = toStrFn;
    }
    put (key, value){
        if (key!=null && value!=null) {
            const pos = this.hashCode(key)
            if (this.table[pos]==null) {
                this.table[pos] = new ValuePair(key, value)
            } else {
                let index = pos + 1;
                while(this.table[index]!=null){
                    index++
                }
                this.table[index] = new ValuePair(key, value)
            }
            return true
        }
        return false
    }
    get(key) {
        const pos = this.hashCode(key)
        if (this.table[pos] == null) {
            return undefined
        }
        let index = pos; 
        while(this.table[index].key != key && this.table[index] != null) {
            index ++
        }
        
        if (this.table[index].key == key &&this.table[index]!=null ){
            return this.table[index].value
        }

        return undefined
    }
    remove(key) {
        if (key != null) {
            const pos =  this.hashCode(key);
            if (this.table[pos] == null) {
                return false
            }
            let index = pos
            let subtrai_index = false; 
            while (this.table[index]!=null && this.hashCode(this.table[index].key) === pos ){
                if (this.table[index].key === key) {
                    subtrai_index = true 
                    this.table[index] = this.table[index+1]
                } else if(subtrai_index){
                    this.table[index] = this.table[index+1]
                }
                index ++;
            }
            delete this.table[index-1]
            return true
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
    const hash = new HashLinearProbing()
    hash.put('Jonathan', 'Jonathan@gmail.com')
    hash.put('Jamie', 'Jamie@gmail.com')
    hash.put('Sue', 'Sue@gmail.com')
    console.log(hash.table)
    console.log(hash.get('Jamie')) // Jamie@gmail.com
    console.log(hash.get('Jonathan')) // Jonathan@gmail.com
    console.log(hash.table) // 
    //  {
    //   '5': ValuePair { key: 'Jonathan', value: 'Jonathan@gmail.com' },
    //   '6': ValuePair { key: 'Jamie', value: 'Jamie@gmail.com' },
    //   '7': ValuePair { key: 'Sue', value: 'Sue@gmail.com' } 
    //  }

    console.log(hash.remove('Jamie')) // true
    console.log(hash.table) //
    // { 
    //     '5': ValuePair { key: 'Jonathan', value: 'Jonathan@gmail.com' },
    //     '6': ValuePair { key: 'Sue', value: 'Sue@gmail.com' } 
    // }

    console.log(hash.remove('Sue')) // true
    console.log(hash.table) //
    // { '5': ValuePair { key: 'Jonathan', value: 'Jonathan@gmail.com' } }

    console.log(hash.remove('Jonathan')) // false
    console.log(hash.table) //
    // {}






}