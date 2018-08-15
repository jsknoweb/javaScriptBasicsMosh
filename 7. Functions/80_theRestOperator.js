console.log('---FUNCTION WITH THE REST OPERATOR---');
function sumWithAllArgs(...args) {
    console.log(args);
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return  total;
}

console.log(sumWithAllArgs(1, 4));
console.log(sumWithAllArgs(1));
console.log(sumWithAllArgs());
console.log(sumWithAllArgsReduce(1, 2, 3, 4, 5, 10));
console.log(sumWithAllArgs('a', 'b'));

console.log('---FUNCTION WITH THE REST OPERATOR AND REDUCE---');
function sumWithAllArgsReduce(...args) {
    return  args.reduce((a, b) => a +b);
}

console.log(sumWithAllArgsReduce(1, 4));
console.log(sumWithAllArgsReduce(1));
//console.log(sumWithAllArgsReduce());
console.log(sumWithAllArgsReduce(1, 2, 3, 4, 5, 10));
console.log(sumWithAllArgsReduce('a', 'b'));

console.log('---NEXT LEVEL !!!---');
function totalCartWithDiscount(discount, ...prices) {
    total = prices.reduce((a, b) => a +b);
    return total * (1 - discount);
}

console.log(totalCartWithDiscount(0.1, 1, 4));
console.log(totalCartWithDiscount(0.1, 1));
console.log(totalCartWithDiscount(0.5, 1, 2, 3, 4, 5, 10));
console.log(totalCartWithDiscount(0.1, 20, 30));

