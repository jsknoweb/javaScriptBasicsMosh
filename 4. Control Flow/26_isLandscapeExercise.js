
console.log('--------------------');
console.log(isLandscape(800,600));
console.log(isLandscape(300,600));
console.log(isLandscape(700,700));

function isLandscape(width, height) {
    return width > height;
}

