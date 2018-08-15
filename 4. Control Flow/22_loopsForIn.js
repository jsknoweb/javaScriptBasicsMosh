
// for loops
// while loops
// do-while loops

// for-in loop
const person = {
    name: 'Jose',
    age: 30
};

for(let key in person) {
    console.log(key, ':', person.key); // Does not work
    console.log(key, ':', person[key]);
}

const colors = ['red', 'green', 'blue'];
for(let index in colors) {
    console.log(index, colors[index]);
}

