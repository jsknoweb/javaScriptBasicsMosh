
// Let's see some of the built-in objects in JavaScript.

console.log(Math.random());

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
console.log(getRandomIntInclusive(0, 10));

console.log(Math.round(1.9));

console.log(Math.max(1, 2, 3, -10));

console.log(Math.min(1, 2, 3, -10));



