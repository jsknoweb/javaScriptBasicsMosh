
console.log(maxNumber(10,5));
console.log(maxNumber(10,20));
console.log(maxNumber(7,7));

function maxNumber(num1, num2) {
    if(num1 > num2) {
        return num1;
    } 
    return num2;
}

console.log('--------------------');
console.log(maxNumberOptimized(10,5));
console.log(maxNumberOptimized(10,20));
console.log(maxNumberOptimized(7,7));

function maxNumberOptimized(a, b) {
    return a > b ? a : b;
}

