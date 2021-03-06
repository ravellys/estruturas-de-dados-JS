//  interface é uma descrição dos atributos
function printName(person) {
    console.log(person.name);
}
var john = { name: 'John', age: 21 };
var mary = { name: 'Mary', age: 21, phone: '123-456789' }; // duck typing
printName(john);
printName(mary);
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
