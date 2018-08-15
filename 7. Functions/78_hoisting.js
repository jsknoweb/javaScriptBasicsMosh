
// Function Declaration  can be called before their definition.
walk();

// Function Declaration
function walk() {
    console.log('walk');
}

// Function Expression can not be invoked before their declaration.
run();

// Function Expression
let run = function() {
    console.log('run');
};


// Hoisting in JavaScript is the process of moving functions 
// declarations to the top of the file automatically by the
// JavaScript engine.
