
const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(object) {
    for(property in  object) {
        if(typeof object[property] === 'string') {
            console.log(property, object[property]);
        }
    }
}


