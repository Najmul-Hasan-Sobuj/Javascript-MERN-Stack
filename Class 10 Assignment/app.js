// Create an email pattern 
let email = "najmulhasansobuj87@gmail.com";
let emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
if (emailPattern.test(email)) {
    console.log('Your email address is valid');
} else{
    console.log('Your email address is invalid');
}

// Create a  username pattern
let userName = "najmul87";
let userNamePattern = /^[a-zA-Z0-9]+$/;
if (userNamePattern.test(userName)) {
    console.log('Your User Name is valid');
} else{
    console.log('Your User Name is invalid');
}

// Create a Bangladeshi phone number pattern
let phoneNumber = "01722707693";
let phoneNumberPattern = /^(01|8801|\+8801)[0-9]{9}$/;
if (phoneNumberPattern.test(phoneNumber)) {
    console.log('Your Phone Number is valid');
} else{
    console.log('Your Phone Number is invalid');
}

// Create a password pattern
let password = "gyuyg232QQ";
let passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}/;
if (passwordPattern.test(password)) {
    console.log('Your password is valid');
} else{
    console.log('Your password is invalid');
}


// Create a zipcode pattern
let zipCode = "1207";
let zipCodePattern = /^\d{4}(-\d{4})?$/;
if (zipCodePattern.test(zipCode)) {
    console.log('Your Zip Code is valid');
} else{
    console.log('Your Zip Code is invalid');
}
