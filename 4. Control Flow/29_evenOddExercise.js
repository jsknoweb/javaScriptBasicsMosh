
showNumbers(10);

function showNumbers(limit) {
    let message;
    for(let i = 0; i < limit + 1; i++){
        message = i % 2 === 0 ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}


