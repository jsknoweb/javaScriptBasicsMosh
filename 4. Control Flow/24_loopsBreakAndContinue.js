let i = 0;

console.log('break example');
while(i <= 10) {
    if(i === 5) break;
    console.log(i);
    i++;
}


// This must not be used, continue is a legacy thing.
console.log('continue example');
let j = 0;
while(j <= 10) {
    if(j % 2 === 0) {
        j++;
        continue;
    }
    console.log(j);
    j++;
}


