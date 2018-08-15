const numbers = [1, 2, 3, -4, 1];
const noElements = [];

console.log('---FOR OF---');
const max = getMax(numbers);
console.log('Max element: ', max);
const max2 = getMax(noElements);
console.log('Max element: ', max2);

console.log('---REDUCE---');
const maxWithReduce = getMaxWithReduce(numbers);
console.log('Max element: ', maxWithReduce);
const max2WithReduce = getMaxWithReduce(noElements);
console.log('Max element: ', max2WithReduce);

console.log('---REDUCE ARROW NOTATION---');
const maxWithReduceArrow = getMaxWithReduceArrowNot(numbers);
console.log('Max element: ', maxWithReduceArrow);
const max2WithReduceArrow = getMaxWithReduceArrowNot(noElements);
console.log('Max element: ', max2WithReduceArrow);

function getMax(array) {
    let maxElement;
    for(let element of array) {
        if(element > maxElement || maxElement === undefined) maxElement = element;
    }
    return maxElement;
}

function getMaxWithReduce(array) {
    if (array.length === 0) return undefined;
    return array.reduce((accumulattor, current) => {
        if (current > accumulattor) accumulattor = current;
        console.log(accumulattor, current);
        return accumulattor;
    });
}

function getMaxWithReduceArrowNot(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}