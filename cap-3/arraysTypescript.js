var friends = [
    { name: 'John', age: 30 },
    { name: 'Ana', age: 31 },
    { name: 'Chris', age: 25 }
];
function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}
;
