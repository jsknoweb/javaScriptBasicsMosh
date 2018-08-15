
const numbers = [1, 2, 3, 4];
const output = move(numbers, 1, 1);
const output2 = move2(numbers, 1, 1);
console.log(output);
console.log(output2);

console.log('---MY IMPLEMENTATION---');
function move(array, index, offset) {
    let outputArray = [];
    if(isOffsetInvalid(array.length, index, offset)) return;
    if(offset > 0) processOffsetPositive(array, outputArray, index, offset);
    if(offset < 0) processOffsetNegative(array, outputArray, index, offset);
    if(offset === 0) outputArray = [...array];
    return outputArray;
}

function isOffsetInvalid(arrayLength, index, offset) {
    let newPosition = index + offset;
    if(newPosition > arrayLength - 1 || newPosition < 0) {
        console.error('Invalid offset');
        return true;
    }
}

function processOffsetPositive(originalArray, outputArray, index, offset) {
    const newPosition = index + offset;
    for (let i = 0; i < originalArray.length; i++) {
        if(i === newPosition) outputArray.push(originalArray[index]);
        else if(i < index || i > newPosition) outputArray.push(originalArray[i]);
        else if(i >= index && i < newPosition) outputArray.push(originalArray[i + 1])
    }
}

function processOffsetNegative(originalArray, outputArray, index, offset) {
    const newPosition = index + offset;
    for (let i = 0; i < originalArray.length; i++) {
        if(i === newPosition) outputArray.push(originalArray[index]);
        else if(i < newPosition || i > index) outputArray.push(originalArray[i]);
        else if(i > newPosition && i <= index) outputArray.push(originalArray[i - 1])
    }
}

console.log('---COURSE, MUCH SIMPLER IMPLEMENTATION---');
function move2(array, index, offset) {
    const newPosition = index + offset;
    if (newPosition >= array.length || newPosition < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const changedElement = output.splice(index, 1)[0];
    output.splice(newPosition, 0, changedElement);
    return output;

}