// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

console.log(Circle.name);
console.log(Circle.length);
console.log(Circle.constructor);

const Circle2 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log('draw');
}
`);

console.log('----------');

const circle = new Circle2(1);
console.log(circle);

console.log('----------');
Circle.call({}, 5);
Circle.apply({}, [5]);

/* ??????????????
console.log('----------');
let circleCall;
let circleApply;
Circle.call(circleCall, 5);
Circle.apply(circleApply, [5]);
console.log(circleCall);
console.log(circleApply);
*/