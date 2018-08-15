let address1 = new Address('Street',
'Constructor Smith', 23, 'Manchester','BZ145Y');
let address2 = new Address('Street',
'Constructor Smith', 24, 'Manchester','BZ145Y');
let address3 = address2;
let address4 = new Address('Street',
'Constructor Smith', 23, 'Manchester','BZ145Y');

// Constructor Function
function Address(type, name, number, city, code) {
    this.type = type;
    this.name = name;
    this.number = number;
    this.city = city;
    this.code = code;
}

function showAddress(address) {
    for (key in address) {
        console.log(key, ':', address[key]);
    }
}

showAddress(address1);
console.log('---------------');
showAddress(address2);

function areEqual(address1, address2) {
    return address1.type === address2.type &&
    address1.name === address2.name &&
    address1.number === address2.number &&
    address1.city === address2.city &&
    address1.code === address2.code;
}

function areSame(address1, address2) {
    return address1 === address2;
}

console.log('Address1 is the same as address4: ', 
            areSame(address1, address4));
console.log('Address1 is equal to address4 :', 
            areEqual(address1, address4));

console.log('Address2 is the same as address3: ', 
            areSame(address2, address3));
console.log('Address1 is equal to address2 :', 
            areEqual(address1, address2));
