// LET E CONST NO LUGAR DE VAR
 
var framework = 'Angular';
var framework = 'React';
console.log(framework) // React

let language = 'JS';
// let language = 'python'; // error
console.log(language) //JS

const PI = 3.14;
// PI = 3; // error
console.log(PI) // 3.14

const jsFramework  = {
    name: "Angular"
}
jsFramework.name = 'React';
console.log(jsFramework)

// jsFramework = {name: "React"} // error

//  ESCOPO DE VARIAVEIS COM LET E CONST

let movie = 'LOTR';
// var movie = 'BVS'; error
function starWarsFan() {
    const movie = 'Star Wars';
    return movie;
}
function marvelFan() {
    movie = 'The Avengers';
    return movie;
}

function blizzardFan() {
    const isFan = true;
    let phrase = 'Warcraft';
    console.log('Before if:' + phrase); // Warcraft
    if (isFan) {
        let phrase = 'initial text';
        phrase = 'For the Horde!';
        console.log('Inside if:' + phrase) // For the Horde!
    }
    phrase = 'For the Alliance';
    console.log('After if:' + phrase) // For the Alliance
}
console.log('\n') 
console.log(movie); // LOTR
console.log(starWarsFan()); // Star Wars
console.log(marvelFan()); // The Avengers
console.log(movie); // The Avengers
blizzardFan();
