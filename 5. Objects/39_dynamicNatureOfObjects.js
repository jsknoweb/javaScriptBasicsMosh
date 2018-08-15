
const circle = {
    radius: 1
};

console.log(circle);

circle.color = 'yellow';
circle.draw = function() {
    console.log('drawing this circle');
}
circle.draw();

console.log(circle);

delete circle.color;
delete circle.draw;

console.log(circle);
