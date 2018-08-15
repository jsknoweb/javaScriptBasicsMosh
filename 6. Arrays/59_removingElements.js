const numbers = [0, 1, 2, 3, 4, 5];
console.log(numbers);

// Removing from defined position
const middle = numbers.splice(2, 1);
console.log(numbers);
console.log(middle);

// Removing elements from the end of the array.
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Removing from  the beginning.
const first = numbers.shift();
console.log(numbers);
console.log(first);

