//  interface é uma descrição dos atributos

interface Person {
    name: string;
    age: number;    
}

function printName(person: Person){
    console.log(person.name);
}

const john = {name: 'John', age: 21};
const mary = {name: 'Mary', age: 21, phone: '123-456789'}; // duck typing
printName(john)
printName(mary)

// interface relacionada a POO

interface Comparacao<T> {
    compareTo(b: T): number;
}

class MyObject implements Comparacao<MyObject> {
    age: number;
    compareTo(b: MyObject): number {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    }
}