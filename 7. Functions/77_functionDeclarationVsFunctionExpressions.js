// Function Declaration
function walk() {
    console.log('walk');
}

// Function Expression
let run = function() {
    console.log('run');
};
let move = run;

walk();
run();
move();
