const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf('a'));

console.log(numbers.indexOf('1'));

console.log(numbers.indexOf(1));
console.log(numbers.indexOf(1, 2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(3) !== -1);

console.log(existElementInArray(numbers, 4));
function existElementInArray(array, element) {
    return array.indexOf(element) !== -1;
}

// New way
console.log(numbers.includes(4));

