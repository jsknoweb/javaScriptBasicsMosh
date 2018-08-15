
// Solution 1 when there is no any other reference to the 
// original array.
console.log('---Solution 1---');
let numbers = [0, 1, 2, 3, 4, 5];
let another = numbers;
console.log('Numbers: ', numbers);
console.log('Another: ', another);

numbers = [];
console.log('Numbers: ', numbers);
console.log('Another: ', another);

// Solution 2 LENGTH
console.log('---Solution 2---');
let numbers2 = [0, 1, 2, 3, 4, 5];
let another2 = numbers2;
console.log('Numbers2: ', numbers2);
console.log('Another2: ', another2);

numbers2.length = 0;
console.log('Numbers2: ', numbers2);
console.log('Another2: ', another2);

// Solution 3 SPLICE
console.log('---Solution 3---');
let numbers3 = [0, 1, 2, 3, 4, 5];
let another3 = numbers3;
console.log('Numbers3: ', numbers3);
console.log('Another3: ', another3);

numbers3.splice(0, numbers3.length);
console.log('Numbers3: ', numbers3);
console.log('Another3: ', another3);

// Solution 4 POP not recommended performance cost
// not clean code.
console.log('---Solution 3---');
let numbers4 = [0, 1, 2, 3, 4, 5];
let another4 = numbers4;
console.log('Numbers4: ', numbers4);
console.log('Another4: ', another4);

while(numbers4.length > 0) {
    numbers4.pop();
}
console.log('Numbers4: ', numbers4);
console.log('Another4: ', another4);

// Solution 2 or 1 are the best ones.
