
const numbers = [1, 2, 3, 4, 5];

console.log('---ONE---');
for(let number of numbers) {
    console.log(number);
}

console.log('---TWO---');
numbers.forEach(function(number) {
    console.log(number);
});

console.log('---THREE: ARROW NOTATION---');
numbers.forEach(number => console.log(number));

console.log('---FOUR: ARROW NOTATION SECOND PARAMETER---');
numbers.forEach((number, index) => console.log(index, number));