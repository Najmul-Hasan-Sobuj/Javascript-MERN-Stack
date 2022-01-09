// Create a BMI function for health
let bmiCalculator = (weight,height) =>{

    let bmi = Math.round(weight / Math.pow(height,2));
    
    if (bmi < 18.5) {
    return `Your BMI is  ${bmi} you are underweight.`;
}

else if (bmi >= 18.5 && bmi < 24.9) {
    return `Your BMI is  ${bmi} you have a normal weight.`;
}

else if (bmi >= 25) {
    return `Your BMI is  ${bmi} you are overweight. lose some weight.`;
}else{
    return alert("something wrong, please try again.");
}
    
}

console.log(bmiCalculator(63,1.65));