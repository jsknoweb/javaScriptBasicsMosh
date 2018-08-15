const address = {
    type: 'Avenue',
    name: 'David Hume',
    number: 23,
    city: 'Manchester',
    code: 'BZ145Y'
};

function showAddress(address) {
    for (key in address) {
        console.log(key, ':', address[key]);
    }
}

showAddress(address);