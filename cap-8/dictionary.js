const { defaultToString, ValuePair } = require("../utils/utils");


class Dictionary {
    constructor (toStringFn = defaultToString) {
        this.toStringFn = toStringFn;
        this.table = {}
    }
    set (key, value) {
        if (key != null && value != null){
            const keyStr = this.toStringFn(key)
            this.table[keyStr] = new ValuePair(key, value);
            return true
        }
        return false
    }
    remove (key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStringFn(key)]
            return true
        }
        return false
    }
    hasKey (key) {
        const keyStr = this.toStringFn(key)
        return this.table[keyStr] != null;
    }
    get (key) {
        const valuePair = this.table[this.toStringFn(key)]
        return valuePair == null ? undefined : valuePair.value
    }
    clear () {
        this.table = {}
    }
    size () {
        return Object.keys(this.table).length;
    }
    isEmpty () {
        return this.size() === 0;
    }
    keys () {
        return this.keyValues().map(valuePair => valuePair.key );
    }
    values () {
        return this.keyValues().map(valuePair => valuePair.value );

    }
    keyValues () {
        return Object.values(this.table)
    }
    forEach (callBackFn) {
        const valuesPair = this.keyValues();
        for (let i=0; i<valuesPair.length; i++) {
            const result = callBackFn(valuesPair[i].key, valuesPair[i].value);
            if (result === false) {
                break;
            }
        }
    }
    toString() {
        if (this.isEmpty()){
            return undefined;
        }
        const valuesPair = this.keyValues();
        let string = `${valuesPair[0].toString()}`
        for (let i=1; i<valuesPair.length; i++) {
            string = `${string}, ${valuesPair[i].toString()}`;
        }
        return string;
    }
}

module.exports = {
    Dictionary
}

if (require.main == module) {
    const dicionario = new Dictionary();
    dicionario.set('a', 'a@gmail.com')
    dicionario.set('b', 'b@gmail.com')
    dicionario.set('c', 'c@gmail.com')
    console.log(dicionario.toString()) // #a: a@gmail.com, #b: b@gmail.com, #c: c@gmail.com
    console.log(dicionario.hasKey('a')) // true
    console.log(dicionario.hasKey('d')) // false
    console.log(dicionario.keys()) // [ 'a', 'b', 'c' ]
    console.log(dicionario.values()) // [ 'a@gmail.com', 'b@gmail.com', 'c@gmail.com' ]
    console.log(dicionario.get('a')) // a@gmail.com
    console.log(dicionario.size()) // 3
    console.log(dicionario.remove('a')) // true
    console.log(dicionario.size()) // 2

    dicionario.forEach((k, v) => {
        console.log(`key: ${k}, value: ${v}`)
    })
    // key: b, value: b@gmail.com
    // key: c, value: c@gmail.com
}