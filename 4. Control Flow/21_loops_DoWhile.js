

console.log('If the condition is not met, the statement is not executed');
let i = 9;
while(i <= 5) {
    if(i % 2 !== 0) console.log(i);
    i++;
}

console.log('The statement is executed at least once whether the condition is met or not');
let j = 9;
do {
    if(j % 2 !== 0) console.log(j);
    j++;
} 
while(j <= 5);

