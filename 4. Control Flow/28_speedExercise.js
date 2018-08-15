
checkSpeed(70);
checkSpeed(73);
checkSpeed(75);
checkSpeed(77);
checkSpeed(80);
checkSpeed(83);
checkSpeed(101);
checkSpeed(129);
checkSpeed(130);
checkSpeed(180);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    const points = Math.floor(
        (speed - speedLimit) / kmPerPoint);

    let message;
    if (points < 1) {
        message = 'Ok';
    }
    else if (points >= 12) {
        message = 'License suspended';
    } else {
        message = 'Points ' + points;
    }
    console.log(message);
}


