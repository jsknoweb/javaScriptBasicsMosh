// for loops
// while loops
// do-while loops

// for-in loop
const person = {
    name: 'Jose',
    age: 30
};
for(let key in person) {
    console.log(key, ':', person[key]);
}

// for-of
const colors = ['red', 'green', 'blue'];
for(let color of colors) {
    console.log(color);
}

