const courses = [
    {
        id: 1, name: 'a'
    },
    {
        id: 2, name: 'b'
    }
];

console.log(courses.includes({id: 1, name: 'a'}));

const courseA = courses.find(function(course) {
    return course.name === 'a';
});

console.log(courseA);

const indexOfCourseA = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(indexOfCourseA);

const indexOfCourseXyz = courses.findIndex(function(course) {
    return course.name === 'xyz';
});

console.log(indexOfCourseXyz);
