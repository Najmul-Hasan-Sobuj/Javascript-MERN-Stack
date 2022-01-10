// Check the age of your marriage and provide age-appropriate Messages
let age = prompt('Enter Your age');

if (age >= 18 && age <= 20) {
    alert('age-appropriate');
} else if (age < 18) {
    alert('You are not suitable for marriage');
} else if (age >= 25 || age <= 30) {
    alert('It\'s time for your wedding. If you do not complete the marriage quickly, your marriage age will be much higher.');
} else if (age >= 30 || age <= 50) {
    alert('Where have you been for so long without getting married?');
} else {
    alert('Please, Enter a valid number');
}