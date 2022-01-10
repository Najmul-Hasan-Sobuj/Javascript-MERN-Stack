/*Prepare the resulting system where results can be found in Grade and GPA*/

let mark = parseInt(prompt('Enter Your Subject Mark:'));
let grade;
if (mark <= 60) {
    grade = 'F';
} else if (mark < 70) {
    grade = 'D';
} else if (mark < 80) {
    grade = 'C';
} else if (mark < 90) {
    grade = 'B';
} else if (mark < 100) {
    grade = 'A';
}

switch (grade) {
    case 'A':
        console.log(`GPA:4.00 Grade: ${grade}`);
        break;
    case 'B':
        console.log(`GPA:3.00 Grade: ${grade}`);
        break;
    case 'C':
        console.log(`GPA:2.25 Grade: ${grade}`);
        break;
    case 'D':
        console.log(`GPA:2.00 Grade: ${grade}`);
        break;
    case 'F':
        console.log(`GPA:0.00 Grade: ${grade}`);
        break;
    default:
        alert('something wrong.please,try again');
        break;
}