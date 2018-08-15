
console.log('------ORIGINAL OBJECT-------');
const circle = {
    radius: 1,
    draw() {
        console.log('drawing a circle');
    }
}
console.log(circle);

console.log('------CLONING OBJECT OLD WAY-------');
const anotherCircleOldWay = {};

for(let key in circle) {
    anotherCircleOldWay[key] = circle[key];
}
console.log(anotherCircleOldWay);

console.log('-----CLONING OBJECT NEW WAY-------');
const anotherNewWay = Object.assign({}, circle);
console.log(anotherNewWay);

console.log('-----CLONNING OBJECT NEW WAY NOT EMPTY-------');
const anotherNewWayNotEmpty = Object.assign({
    color: 'yellow'
},  circle);
console.log(anotherNewWayNotEmpty);

console.log('-----CLONING OBJECT NEW WAY NOT EMPTY 2-------');
const anotherNewWayNotEmpty2 = {
    color: 'blue'
};
Object.assign(anotherNewWayNotEmpty2,  circle);
console.log(anotherNewWayNotEmpty2);

console.log('---SIMPLEST AND MOST ELEGANT WAY---')
const anotherCircle = { ...circle};
console.log(anotherCircle);

console.log('-----COMBINING OBJECTS INTO A SINGLE ONE-------');
const object1 = {
    color: 'blue'
};
const object2 = {
    size: 25
};
const joinObject = Object.assign({},  object1, object2);
console.log(joinObject);