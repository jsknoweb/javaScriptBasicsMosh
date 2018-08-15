
const numbers = [1, 2, 3, 1, 4, 1];
const emptyArray = [];
const notAnArray = 'fasfa';
const notAnArrayOfNumbers = [3, 5, true, 4];
try {
    const count = countOcurrencesWithReduce(numbers, 1);
    console.log(count);
} catch(e) {
    alert(e);
}

try {
    const count2 = countOcurrencesWithReduce(emptyArray, 1);
    console.log(count2);
} catch(e) {
    alert(e);
}

try {
    const count3 = countOcurrencesWithReduce(notAnArray, 1);
    console.log(count3);
} catch(e) {
    alert(e);
}

try {
    const count4 = countOcurrencesWithReduce(notAnArrayOfNumbers, 1);
    console.log(count4);
} catch(e) {
    alert(e);
}

try {
    const count5 = countOcurrencesWithReduce(numbers, true);
    console.log(count5);
} catch(e) {
    alert(e);
}

function countOcurrencesWithReduce(array, searchElement) {
    if(!Array.isArray(array))
        throw new Error('The value is not an array');
    if(array.some(element => typeof element != 'number'))
        throw new Error('At least one no number value in  the array');
    if(typeof searchElement !== 'number')
        throw new Error('Search element is not a number');
    return array.reduce((accumulattor, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulattor + occurrence;
    }, 0);
}