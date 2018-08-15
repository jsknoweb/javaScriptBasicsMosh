
// Value types (primitives) :
//  * Number
//  * String 
//  * Boolean
//  * Symbol
//  * undefined
//  * null

// Reference Types
// * Object
// * Function
// * Array

// Primitives are copied by their value.
console.log('------EXAMPLE 1------');
let x = 10;
let y = x;

x = 20;

console.log('x:', x);
console.log('y:', y);

console.log('------------');

// Objects are copied by their reference (memory location).
let obj1 = { value: 10};
let obj2 = obj1;

obj1.value = 20;

console.log(obj1);
console.log(obj2);


console.log('-------EXAMPLE 2---------');
let number = 10;
function increase(number) {
    number++;
}

increase(number);
console.log('number:', number);

console.log('------------');
let objNumber = {value: 10};
function increase(objNumber) {
    objNumber.value++;
}

increase(objNumber);
console.log('number:', objNumber);

