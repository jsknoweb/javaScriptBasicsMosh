console.log('---ONE---');
console.log(sum());
console.log(sum(1, 2, 3, 4));
console.log(sum([]));
console.log(sum([1, 2, 3, 4]));

function sum(...args) {
    let total = 0;
    if(Array.isArray(args[0])) args = args[0]; // Maybe not recommended
    for(let arg of args) {
        total += arg;
    }
    return total;
}

console.log('---TWO---');
console.log(sum2());
console.log(sum2(2, 2, 3, 4));
console.log(sum2([]));
console.log(sum2([2, 2, 3, 4]));

function sum2(...args) {
    let total = 0;
    if(Array.isArray(args[0])) args = args[0];
    args.forEach(arg => total += arg);
    return total;
}

console.log('---THREE---');
console.log(sum3());
console.log(sum3(3, 2, 3, 4));
console.log(sum3([]));
console.log(sum3([3, 2, 3, 4]));

function sum3(...args) {
    if(Array.isArray(args[0])) args = args[0];
    if(args.length > 0) 
        return args.reduce((total, arg) => total + arg);
    return 0;
}

console.log('---FOURTH---');
console.log(sum4());
console.log(sum4(3, 2, 3, 4));
console.log(sum4([]));
console.log(sum4([3, 2, 3, 4]));

function sum4(...args) {
    if(args.length ===1 && Array.isArray(args[0])) 
        args = [...args[0]]; // Beter way
    return args.reduce((total, arg) => total + arg, 0); // Better way.
}