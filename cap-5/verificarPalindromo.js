const Deque = require('./deque')

function isPalindrome(aString) {
    if (aString === undefined || aString === null || 
        ( aString !== null && aString.length === 0)){
            return false;
    }

    const deque = new Deque();
    for (const c of aString) {
        deque.addBack(c);
    }
    console.log(deque.toString()) // a,a

    while (deque.size > 1) {
        if (deque.removeFront() !== deque.removeBack()) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('a'))
console.log(isPalindrome('aa'))
console.log(isPalindrome('kayak'))
console.log(isPalindrome('level'))
console.log(isPalindrome('arroz'))

// SAIDAS
// a
// true
// a,a
// true
// k,a,y,a,k
// true
// l,e,v,e,l
// true
// a,r,r,o,z
// false