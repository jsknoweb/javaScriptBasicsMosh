// Every object has a constructor property and that
// references the function that was used to create
// that object.

// That function can be implemented by the developer
// like the case of new Circle()

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const constructorCircle = new Circle(1);
console.log(constructorCircle.constructor);

// Or it can be a javascript built-in function, like
// createCircle or any String, Number, Boolean object.

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const factoryCircle = createCircle(2);
console.log(factoryCircle.constructor);

let x = {};
console.log(x.constructor);
// let x = new Object();

let isImportant = true;
console.log(isImportant.constructor);

let userName = 'superroot';
console.log(userName.constructor);
