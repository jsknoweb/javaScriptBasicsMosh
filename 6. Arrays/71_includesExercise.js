
const numbers = [1, 2, 3, 4];

console.log('---WITH INDEX ---');
console.log(includesWithIndex(numbers, 4));
console.log(includesWithIndex(numbers, 5));

console.log('---WITH FOR OF ---');
console.log(includesWithIterationForOf(numbers, 4));
console.log(includesWithIterationForOf(numbers, 5));

console.log('---WITH FOR EACH ---');
console.log(includesWithIterationForEach(numbers, 4));
console.log(includesWithIterationForEach(numbers, 5));

console.log('---WITH SOME ---');
console.log(includesWithSome(numbers, 4));
console.log(includesWithSome(numbers, 5));

console.log('---WITH FILTER ---');
console.log(includesWithFilter(numbers, 4));
console.log(includesWithFilter(numbers, 5));

function includesWithIndex(array, searchElement) {
    return array.indexOf(searchElement) !== -1;
}

function includesWithIterationForOf(array, searchElement) {
    for(let element of array) {
        if(element === searchElement) return true;
    }
    return false;
}

// DOES NOT WORK, LIMITATION
function includesWithIterationForEach(array, searchElement) {
    array.forEach(element => {
        if(element === searchElement) return true;
    });
    return false;
}

function includesWithSome(array, searchElement) {
    return array.some(function(value) {
        return value === searchElement;
    });
}

function includesWithFilter(array, searchElement) {
    const filtered = array.filter(
        element => element === searchElement);
    return filtered.length > 0;
}