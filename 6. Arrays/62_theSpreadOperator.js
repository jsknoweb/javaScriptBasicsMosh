
const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined first.concat(second);
const combined = [...first, ...second];

console.log(combined);

// With concat this would be more difficult.
const combined2 = [...first, 'a', ...second, 'b'];
console.log(combined2);

// const slice = combined.slice();
const copy = [...combined];
console.log(copy);