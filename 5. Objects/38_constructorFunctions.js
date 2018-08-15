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
console.log(factoryCircle);
factoryCircle.draw();

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const constructorCircle = new Circle(1);
console.log(constructorCircle);
