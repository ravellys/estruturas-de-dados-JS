// escopo das variaveis

var myVariable = 'global';

var myOtherVariable =  'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable
}

function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable
}


console.log(myVariable)
console.log(myFunction())
console.log(myOtherVariable)
console.log(myOtherFunction())
console.log(myOtherVariable)