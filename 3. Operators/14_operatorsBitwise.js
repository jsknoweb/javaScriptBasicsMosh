
// 1 = 00000001
// 2 = 00000010
// R = 00000011

console.log(1 | 2); // Bitwise OR

// R = 00000000
console.log(1 & 2);

// Read, Write, Execute
// 00000100 Read permission
// 00000010 Write permission
// 00000111 Read, write and execute permissions

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission 
                | writePermission;
console.log(myPermission);

let message = 
        (myPermission & readPermission) ? 'yes' : no;
console.log(message);