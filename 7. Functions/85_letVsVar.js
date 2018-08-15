
console.log('--- FIRST PROBLEM WITH VAR, LOCAL VARIABLES---');
// i SCOPE IS THE FOR LOOP
function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}

// i SCOPE IS THE FUNCTION START2
function start2() {
    for(var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
}

//start();
start2();

// BEFORE ES6 (ES2015) var WAS THE ONLY WAY TO DECLARE A VARIABLE
// AS OFF ES6 WE HAVE let AND const.

// var => function scope variables.
// let and const => block-scoped variables.

console.log('--- SECOND PROBLEM WITH VAR, GLOBAL VARIABLES---');

// var creates a globar variable 'color' and attaches that variable
// to the window object in browsers.
var color = 'red';
let age = 25;

console.log(window.color);
console.log(window.age);

// THIS FUNCTION IS ALSO ATTACH TO THE WINDOW OBJECT BTW.
function sayHi() {
    console.log('hi');
}

// how do we prevent this? WITH FUNCTIONS DECLARED IN SEPARATE MODULES
window.sayHi();