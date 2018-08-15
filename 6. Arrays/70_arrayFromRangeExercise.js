
const numbers = arrayFromRange(-10, 4);

console.log(numbers);

function arrayFromRange(min, max) {
    const range = [];
    for(let i = min; i <= max; i++) {
        range.push(i);
    }
    return range;
}
