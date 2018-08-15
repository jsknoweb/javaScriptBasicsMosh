
// Logical AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true);
console.log(true && false);

let highIncome = false;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('-------------');
console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
eligibleForLoan = highIncome || goodCreditScore;
console.log('-------------');
console.log(eligibleForLoan);

// NOT (!)
console.log('-------------');
let applicantRefused = !eligibleForLoan;
console.log('Application refused', applicantRefused);