console.log('---NORMAL FUNCTION DECLARATION---');
function sum(a, b) {
    console.log(arguments);
    return  a + b;
}

console.log(sum(1, 4));
console.log(sum(1));
console.log(sum());
console.log(sum(1, 4, 5, 6, 7));
console.log(sum('a', 'b'));

console.log('---FUNCTION WITH ARGUMENT OBJECT OF FUNCTION---');
function sumWithAllArgs() {
    let total = 0;
    for (let value of arguments) {
        total += value;
    }
    return  total;
}

console.log(sumWithAllArgs(1, 4));
console.log(sumWithAllArgs(1));
console.log(sumWithAllArgs());
console.log(sumWithAllArgs(1, 4, 5, 6, 7));
console.log(sumWithAllArgs('a', 'b'));
