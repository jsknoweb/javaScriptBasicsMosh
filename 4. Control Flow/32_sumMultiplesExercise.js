
console.log(sum(10));

function sum(limit) {
    let addition = 0;

    for(let i = 0; i <= limit; i++) {
        if(isMultipleOf(i, 3) || isMultipleOf(i, 5)) {
            addition += i;
        }
    }
    
    return addition;
}

function isMultipleOf(number, divisor) {
    return number % divisor === 0;
}


