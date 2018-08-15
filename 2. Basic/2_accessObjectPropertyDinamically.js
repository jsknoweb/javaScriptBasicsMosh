
// Objects in JavaScript

let person = {
    name : 'Jose',
    age : 30
};
console.log(person);

// Dot Notation
person.name = 'Pepe'
console.log(person);

// Bracket Notation
person['name'] = 'Raquel';
console.log(person);

// Better dot notation but bracket notation for dynamic situations
let variableRecievedDinamically = 'age';
person[variableRecievedDinamically] = 34;
console.log(person);


