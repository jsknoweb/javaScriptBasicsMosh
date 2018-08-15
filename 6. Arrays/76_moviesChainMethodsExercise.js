const movies = [
    {title: 'a', year: 2018, rating: 4.5 },
    {title: 'b', year: 2018, rating: 4.7 },
    {title: 'c', year: 2018, rating: 3 },
    {title: 'd', year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title
const filteredMoviesTitles = getFilteredMovies(movies, 2018, 4);
console.log(filteredMoviesTitles);

function getFilteredMovies(movies, year, rating) {
    return movies
        .filter(movie => movie.year === year && movie.rating >= rating)
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(movie => movie.title);
}

// a.rating = 4.5
// b.rating = 4
// a.rating - b.rating = 0.5 > 0 => a > b