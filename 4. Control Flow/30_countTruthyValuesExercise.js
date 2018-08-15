let undefinedValue;
let nullValue = null;
let notANumberValue = NaN;

const numbersArray = [4234, 0, 1, 2];
const stringArray = ['', 'true', 'false', 'Any string'];
const booleanArray = [true, false];
const undefinedArray = [undefinedValue];
const nullArray = [nullValue];

const mixedArray = [0, 1, 434, -3432,
                    '', 'Any String',
                    true, false,
                    undefinedValue,
                    nullValue,
                    notANumberValue];

countTruthy(numbersArray);
countTruthy(stringArray);
countTruthy(booleanArray);
countTruthy(undefinedArray);
countTruthy(nullArray);
countTruthy(mixedArray);

function countTruthy(array) {
    let counter = 0;
    let falsyElements = [];
    for(element of array){
        if(element) counter++;
        else falsyElements.push(element);
    }
    console.log('Number of truthy elements', counter);
    console.log('Falsy elements: ', falsyElements);
}


