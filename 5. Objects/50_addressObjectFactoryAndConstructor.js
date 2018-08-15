let factoryAddress = createAddress('Street',
    'Factory Smith', 23, 'Manchester','BZ145Y');
let constructorAddress = new Address('Street',
'Constructor Smith', 23, 'Manchester','BZ145Y');

// Factory Function
function createAddress(type, name, number, city, code) {
    return {
        type,
        name,
        number,
        city,
        code 
    };
}

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

showAddress(factoryAddress);
console.log('---------------');
showAddress(constructorAddress);