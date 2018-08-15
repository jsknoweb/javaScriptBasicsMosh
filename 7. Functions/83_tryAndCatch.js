const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `Name: ${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        //if(typeof value !== 'string') return;
        if(typeof value !== 'string') 
            throw new Error('Value is not a string');
        const parts = value.split(' ');
        if(parts.length !== 2) 
            throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);
try {
    person.fullName = null;
} catch(e) {
    alert(e);
}
console.log(person.fullName);

try {
    person.fullName = '';
} catch(e) {
    alert(e);
}
console.log(person.fullName);