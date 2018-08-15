const numbers = [1, 2, 3, 4, 1];
const count = countOcurrences(numbers, 1);
console.log(count);
const countWithReduce = countOcurrencesWithReduce(numbers, 1);
console.log(countWithReduce);

function countOcurrences(array, searchElement) {
    let counter = 0;
    for(let element of array) {
        if(element === searchElement) counter++;
    }
    return counter;
}

function countOcurrencesWithReduce(array, searchElement) {
    return array.reduce((accumulattor, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        console.log(accumulattor, current, searchElement);
        return accumulattor + occurrence;
    }, 0);
}