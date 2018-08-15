function RangePrice(label, tooltip, minPerPerson, maxPerPerson) {
    this.label = label;
    this.tooltip = tooltip;
    this.minPerPerson = minPerPerson;
    this.maxPerPerson = maxPerPerson;
}

const range = [];
range.push(new RangePrice('$', 'Inexpensive', 0, 10));
range.push(new RangePrice('$$', 'Moderate', 11, 20));
range.push(new RangePrice('$$$', 'Expensive', 21, 50));

console.log(range);

let restaurant = [
    {averagePrice: 5}
];
