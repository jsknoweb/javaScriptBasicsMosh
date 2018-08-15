
console.log('---PRIMITIVES: THEY ARE COPIED BY THEIR VALUES---');
const first = [1, 2, 3];
const second = [4, 5, 6];

combined = first.concat(second);
console.log(combined);

const slice = combined.slice(2, 4);
console.log(slice);

const slice2 = combined.slice(2);
console.log(slice2);

const slice3 = combined.slice();
console.log(slice3);

console.log('---REFERENCE: THEY ARE COPIED BY THEIR REFERENCES---');
const firstRef = [
    {
        id: 1, name: 'a'
    },
    {
        id: 2, name: 'b'
    }
];
const secondPrim = [4, 5, 6];

const combinedRef = firstRef.concat(secondPrim);
console.log(combinedRef[0].id);

firstRef[0].id = 100;
console.log(combinedRef[0].id);