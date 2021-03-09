interface Person {
    name: string,
    age: number,
}

const friends = [
    { name: 'John', age: 30},
    { name: 'Ana', age: 31},
    { name: 'Chris', age: 25}
]

function comparePerson(a: Person, b: Person) {
    if (a.age < b.age) {
        return -1
    }
    if (a.age > b.age) {
        return 1
    }
    return 0
};