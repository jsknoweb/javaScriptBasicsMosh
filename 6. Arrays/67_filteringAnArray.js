
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function(value) {
    return value >= 0;
});
console.log(filtered);

console.log('---ARROW NOTATION---');
const filteredArrowNot = numbers.filter(number => number < 0);
console.log(filteredArrowNot);

console.log('---ARRAYS OF REFERENCE TYPES---');
const restaurants = [
    {id:1, name:'The Loop', averagePrice: 40, veg: false},
    {id:2, name:'The Clients List', averagePrice:25, veg: true},
    {id:3, name:'Clever Boy', averagePrice:60, veg:false},
    {id:4, name:'Lost in Space', averagePrice: 15, veg:true}
];
const expensiveNonVegRestaurants = 
    filterExpensiveVeg(restaurants, 40, false);
console.log(expensiveNonVegRestaurants);

function filterExpensiveVeg(restaurants, price, isVeg) {
    return restaurants.filter(
        restaurant => restaurant.averagePrice >= price 
            && restaurant.veg === isVeg);
}


