
// Divisible by 3 ==> Fizz
// Divisible by 5 ==> Buzz
// Divisible by both 3 and 5 ==> FizzBuzz
// Not divisible by 3 or 5 ==> input
// Not a number ==> 'Not a number'

let output = fizzbuzz('A string');
console.log(output);
output = fizzbuzz(45);
console.log(output);
output = fizzbuzz(9);
console.log(output);
output = fizzbuzz(10);
console.log(output);
output = fizzbuzz(37);
console.log(output);

function fizzbuzz(input) {
    if(isNotNumber(input)) {
        return 'Not a number';
    }
    return checkDivisibility(input);
}

function isNotNumber(input) {
    return typeof input !== 'number';
}

function checkDivisibility(input) {
    let div3 = isDivisibleBy3(input)
    let div5 = isDivisibleBy5(input);
    if(div3 && div5) {
        return div3 + div5;
    } else if(div3 && !div5) {
        return div3;
    } else if(!div3 && div5) {
        return div5;
    } else {
        return input;
    }
}

function isDivisibleBy3(input) {
    return input % 3 === 0 ? 'Fizz' : false;
}

function isDivisibleBy5(input) {
    return input % 5 === 0 ? 'Buzz' : false;
}

