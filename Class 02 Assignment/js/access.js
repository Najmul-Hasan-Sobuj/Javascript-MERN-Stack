// Prepare a user access program based on age where everyone between the ages of 20 and 35 will have access

let age = prompt('Enter Your age');

if (age<=0 || age >150) {
    console.log('This number are not acceptable.Plz, enter a genuine number.');
}else if (age >= 20 && age <= 35) {
    console.log('Congratulation, You are successfully access');
}else{
    alert('Between ages of 20 and 35 will have acceptable');
}