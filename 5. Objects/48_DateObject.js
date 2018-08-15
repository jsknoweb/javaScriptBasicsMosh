const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.getMonth();
now.setFullYear(2017);

console.log(now.toDateString());
console.log(now.toTimeString());

// This is the normal approach to translate
// the date between the Client and the Server
// if you are building a web service or mobile app.
console.log(now.toISOString());