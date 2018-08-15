
// Falsy (false) :
// - undefined
// - null
// - 0
// - false
// - ''
// - NaN
console.log(false == '');
console.log(false === '');

console.log('--------------------');
// Anything that is not Falsy --> Truthy
console.log(false || true);
console.log(false || 'Mosh');
console.log(false || 0);
console.log(false || 1);

// Short-circuiting
console.log('--------------------');
console.log(false || 1 || 2);
console.log(false || 2 || 1);

console.log('--------------------');
let userColor = 'red';
let defaultColor = 'blue';
let mostLovedColor;
let currentColor = userColor || defaultColor;
let preferredColor = mostLovedColor || defaultColor;

console.log(currentColor);
console.log(preferredColor);