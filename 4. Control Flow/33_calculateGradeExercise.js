
let marks = [80, 80, 50];
let marks2 = [70, 70, 40];

console.log(calculateGrade(marks));
console.log(calculateGrade(marks2));

function calculateGrade(marks) {
    let average = calculateAverage(marks);
    return calculateGradeFromAverage2(average);
}

function calculateAverage(marks) {
    let total = 0;
    for(let mark of marks) {
        total += mark;
    }
    
    return total / marks.length;
}

function calculateGradeFromAverage(average) {
    if(average >= 0 && average <= 59) {
        return 'F';
    } else if(average >= 60 && average <= 69) {
        return 'D';
    } else if(average >= 70 && average <= 79) {
        return 'C';
    } else if(average >= 80 && average <= 89) {
        return 'B';
    } else {
        return 'A';
    }
}

function calculateGradeFromAverage2(average) {
    if(average < 60) {
        return 'F';
    } else if(average < 70) {
        return 'D';
    } else if(average < 80) {
        return 'C';
    } else if(average < 90) {
        return 'B';
    } 
    return 'A';
}

