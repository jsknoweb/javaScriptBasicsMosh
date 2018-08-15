
// DEFAULT VALUES OLD WAY
console.log('--DEFAULT VALUES OLD WAY--');
function interest(principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;
    return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));

// DEFAULT VALUES NEW WAY
console.log('--DEFAULT VALUES NEW WAY--');
function interestWithDefaults(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}

console.log(interestWithDefaults(10000, 3.5, 5));
console.log(interestWithDefaults(10000));

// IMPORTANT: ONCE YOU GIVE AN ARGUMENT A DEFAULT VALUES YOU 
// HAVE TO GIVE A DEFAULT TO ALL THE PARAMETERS AFTER IT/
// OTHERWISE IT IS CONFUSING BECAUSE THE PROGRAM DOES NOT KNOW IF
// 5 SHOULD BE ASSIGN TO RATE OR YEARS.
console.log('--DEFAULT VALUES BAD WAY--');
function badInterest(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}

console.log(badInterest(10000, 5));
// TRICK
console.log(badInterest(10000, undefined, 5));

// so the solution and as best practice
console.log('--DEFAULT VALUES AT THE END--');
function goodInterest(principal, years, rate = 3.5) {
    return principal * rate / 100 * years;
}

console.log(goodInterest(10000, 5));