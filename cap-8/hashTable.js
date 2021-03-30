const { defaultToString, ValuePair } = require("../utils/utils");

class HashTable {
    constructor(toStrFn=defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }
    isEmpty(){
        return this.size() === 0
    }
    size() {
        return Object.keys(this.table).length;
    }
    put(key, value) {
        if (key != null && value != null) {
            const pos = this.hashCode(key);
            this.table[pos] = new ValuePair(key, value);
            return true;
        }
        return false;
    }
    remove(key) {
        const pos = this.hashCode(key)
        const valuePair = this.table(pos)
        if ( valuePair != null) {
            delete this.table[pos];
            return true
        }
        return false
    }
    get(key) {
        const pos = this.hashCode(key)
        const valuePair =  this.table[pos]
        return valuePair == null ? undefined : valuePair.value;
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
    toString(){
        if (this.isEmpty()){
            return undefined
        }
        const keys = Object.keys(this.table);
        let str = `{${keys[0]} => ${this.table[keys[0]].toString()}} \n`
        for(let i=1; i<keys.length; i++) {
            str = `${str}{${keys[i]} => ${this.table[keys[i]].toString()}} \n`
        }
        return str;
        
    }
}

module.exports = {
    HashTable
}

if(require.main == module){
    const hash = new HashTable()
    hash.put('a', 'a@gmail.com')
    hash.put('b', 'b@gmail.com')
    hash.put('c', 'c@gmail.com')
    console.log(hash.get('a')) // a@gmail.com
    console.log(hash.get('b')) // b@gmail.com
    console.log(hash.toString())
}