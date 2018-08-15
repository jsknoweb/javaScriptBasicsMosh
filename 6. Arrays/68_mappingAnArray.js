console.log('---MAPPING NUMBERS TO STRINGS---');
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');
console.log(items);

const html = items.join();
console.log(html);

const html2 = items.join('');
console.log(html2);

const html2WithUl = '<ul>' + items.join('') + '</ul>';
console.log(html2WithUl);

console.log('---MAPPING NUMBERS TO OBJECTS---');
const objItems = filtered.map(n => {
    const obj = {value: n };
    return obj;
});
console.log(objItems);

const objItemsArrowNot = filtered.map(n => ({ value: 3*n }));
console.log(objItemsArrowNot);

console.log('---FILTER AND MAP ARE CHAINABLE---');
const chainedItems = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(chainedItems);