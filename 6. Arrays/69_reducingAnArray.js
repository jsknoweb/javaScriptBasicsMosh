
const numbers = [1, -1, 2, 3];

// Old way
let sum = 0;
for (let n of numbers) {
    sum += n;
}
console.log(sum);

// New Way with reducing
// 0 is the initial value for accumulator
const sumReducing = numbers.reduce((accumulator, currentValue) => 
    accumulator += currentValue, 0);
console.log(sumReducing);

// the first element of the array is the initial value for accumulator
const sumReducing2 = numbers.reduce(
    (accumulator, currentValue) => accumulator += currentValue);
console.log(sumReducing2);