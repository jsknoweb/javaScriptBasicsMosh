const circle = {
    radius: 1,
    draw() {
        console.log('drawing a circle');
    }
}

console.log('------MORE APPROPIATE WAY-----------');
for(let key in circle) {
    console.log(key, ':', circle[key]);
}

// An object is not iterable.
/*
for(let key of circle) {
    console.log(key);
}
*/

console.log('------OBJECT KEYS-----------');
for(let key of Object.keys(circle)) {
    console.log(key, ':',  circle[key]);
}

console.log('-----OBJECT ENTRIES----');
for(let entry of Object.entries(circle)) {
    console.log(entry);
}

console.log('-----PROPERTY IF EXISTS----');
if('radius' in circle) {
    console.log(circle.radius);
}

console.log('-----------------');

// Each Object is a built-in constructor function...
// Whenever we create an object in JavaScript this
// constructor is executed under the hood
// function Object() {...}
const anObject = {
    anyProperty: 'anyValue',
    anyProp2: 'anyValue2'
};
console.log(Object.keys(anObject));

console.log('-----------------');