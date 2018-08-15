const courses = [
    {
        id: 1, name: 'a', price: 120
    },
    {
        id: 2, name: 'a', price: 80
    },
    {
        id: 3, name: 'b', price: 140
    }
];

// ARROW syntax for callback, removing function and others.

// Concise syntax
const courseA = 
    courses.find(course => course.name === 'a');

console.log(courseA);

// Synxtax without removing brackets,...
function findCourse(courses, name, price) {
    return courses.find((course) => {
        return course.name === name && course.price <= price;
    });
}

const courseACheap = findCourse(courses, 'a', 100);

console.log(courseACheap);
