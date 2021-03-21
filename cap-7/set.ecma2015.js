const setA = new Set();
const setB = new Set();

setA.add(1);
setA.add(2);
setA.add(3);

setB.add(2);
setB.add(3);
setB.add(4);

// Simulando União

const union = (set1, set2) => {
    const setUnion = new Set();
    set1.forEach(element => { setUnion.add(element) });
    set2.forEach(element => { setUnion.add(element) });
    return setUnion
}

console.log(union(setA, setB)) // Set {1, 2, 3, 5}


// Simulando Intersecção

const intersection = (set1, set2) => {
    const insersecSet = new Set();
    const bigSet = set1;
    const smallSet = set2;
    if (bigSet.size < smallSet.size) {
        [bigSet, smallSet] = [smallSet, bigSet]
    }
    smallSet.forEach(element=>{
        if(bigSet.has(element)){
            insersecSet.add(element);
        }
    })
    return insersecSet
}

console.log(intersection(setA, setB)) // {2, 3}


// Simulando a diferença

const difference = (set1, set2) => {
    const diffSet = new Set();
    
    set1.forEach(element => {
        if (!set2.has(element)){
            diffSet.add(element)
        }
    })

    return diffSet
}

console.log(difference(setA, setB)) // Set { 1 }
console.log(difference(setB, setA)) // Set { 4 }


// Usando operador de espalhamento

// união
const unionEspalhamento = new Set([...setA, ...setB])
console.log(unionEspalhamento) // Set { 1, 2, 3, 4 }

// intersecção
const intersectionEspalhamento = new Set([...setA].filter(x => setB.has(x)))
console.log(intersectionEspalhamento) // Set { 2, 3 }
