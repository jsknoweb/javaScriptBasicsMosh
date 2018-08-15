
{
    const message = 'hi';
}

function start() {
    if(true) {
        const another = 'bye';
    }
    console.log(another);
}

function start2() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

// FIRST PART: EXECUTE LINE BY LINE
//console.log(message);
//start();
//start2();

let color = 'red';

// GLOBAL SCOPE VARIABLES ARE ACCESSIBLE LOCALLY.
function start3() {
    const message = 'hi';
    console.log(message);
    console.log(color);
}

// LOCAL VARIABLES TAKE PRECEDENCE AND HIDE GLOBAL SCOPE VARIABLES.
function start4() {
    const message = 'what\'s up';
    const color = 'blue';
    console.log(message);
    console.log(color);
}

// GLOBAL SCOPE VARIABLES CAN BE CHANGED LOCALLY.
// AVOID DECLARING GLOBAL VARIABLES !!!! BAD PRACTICE
function start5() {
    color = 'orange';
}

start3();
start4();
start5();
console.log(color);