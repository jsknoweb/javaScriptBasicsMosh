// Object Literals --> {}
// Boolean Literals --> true, false
// String Literals --> '', ""
// Template Literals --> ``

const message = `This is my 
'first' message`;

console.log(message);

// String Primitive
const anotherMessage = 'This is my \n' +
    '\'first\' message';
console.log(anotherMessage);

// Template Literals util for emails
// and we can add placeholders, expressions and 
// invoke functions.
const name = 'Jose';
function getAction() {
    return 'sent the request';
}
const email = 
`Hi ${name},

${2 + 3} days after you ${getAction()}, I'd like to
thank you for joining my mailing list.

Regards,
Mosh`;

console.log(email);
