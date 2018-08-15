const numbers = [3, 4];

// Adding elements to the end
numbers.push(5, 6);
console.log(numbers);

// to the beginning
numbers.unshift(1, 2);
console.log(numbers);

// to the middle
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);