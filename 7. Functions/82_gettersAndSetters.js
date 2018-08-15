
console.log('---FIRST PART---');
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    fullNameOldWay: function() {
        return `My name is ${person.firstName} ${person.lastName}`;
    },
    fullNameNewWay() {
        return `Name: ${person.firstName} ${person.lastName}`;
    }
};

console.log(`${person.firstName} ${person.lastName}`);
// Now every time we have to show someone fullname smply call the method. 
console.log(person.fullNameOldWay());
console.log(person.fullNameNewWay());

console.log('---SECOND PART: REFINING---');
const newPerson = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `Name: ${newPerson.firstName} ${newPerson.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(newPerson.fullName);
newPerson.fullName = 'John Smith';
console.log(newPerson.fullName);
console.log(newPerson);
