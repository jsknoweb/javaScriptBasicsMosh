// Factory Function
function createCircle(radius) {
    return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}

// Modern way
function createCircleOpt(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircleOpt(2);
console.log(circle1);
circle1.draw();

const circle2 = createCircleOpt(10);
console.log(circle2);
