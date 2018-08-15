// String primitive
const message = 'This is a message';

// String object
const anotherMessage = new String('This is a message');

console.log('Type of string primitive:', typeof message);
console.log('Type of string object:', typeof anotherMessage);

// However when  we use the DOT NOTATION with the 
//primitive, JavaScript engine internally wraps this
// with in a String Object
console.log(message.length);
console.log(message[1]);
console.log(message.includes('H'));
console.log(message.includes('message'));
console.log(message.startsWith('This'));
console.log(message.startsWith('this'));
console.log(message.endsWith('age'));
console.log(message.indexOf('is a'));
console.log(message.replace('a message', 'my message'));
console.log(message);
console.log(message.toUpperCase());
message.trim();

const mess = 'trial trim...   ';
console.log(mess);
mess.trimRight();
console.log(mess);

console.log('--------ESCAPE NOTATION------');
const escapeMessage = 'Peter\'s house is \npretty far';
console.log(escapeMessage);

console.log(message.split(' '));
