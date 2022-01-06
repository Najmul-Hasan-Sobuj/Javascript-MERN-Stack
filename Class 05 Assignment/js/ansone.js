// Answer to the question no one:  
function Main() {
    // Create a function that will return children, teenagers, young people, old people from the age.
    this.age = () =>{
        let yourAge = parseInt(prompt("Enter Your Age:"));
     
         if (yourAge <= 7 && yourAge > 0) {
             return "You are a children";
         }else if (yourAge < 18 && yourAge >= 12) {
             return "You are a teenagers";
         }else if (yourAge >= 18 && yourAge < 30) {
             return "You are a young";
         } else if(yourAge >= 30 && yourAge <= 50){
             return "You are a old";
         } else{
             return alert("somethings else, please try again. thank you.");
         }
     }

    // Create a function that will return the area of a rectangle, square, triangle.
    this.area = (type,length,width) => {
            if (type == 'square') {
                return `Total square:${length * length}`;
            }else if(type == 'rectangle'){
                return `Total rectangle:${length * width}`;
            }else if(type == 'traingle'){
                return `Total traingle:${.5 * length * width}`;
            }else{
                return "something wrong,please try again.";
            }
    }

    // Create an age calculator function.
    this.ageCalculator = () => {
        let name = prompt("Enter Your Name:");
        let birthYear = parseInt(prompt("Enter Your Birth Year:"));

        return`Hello ${name} Your Age ${2021 - birthYear}`;
    }

    // Create a BMI function for health
        this.bmiCalculator = (weight,height) =>{

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

    // Create a currency converter function from taka to USD, CAD, POUND, EURO etc
    this.converter = () => {

        let currencyName = prompt("Enter Currency Name");
        let amount = prompt("Enter Total Amount");

        if (currencyName == 'USD') {
            return `Total ${amount * 85.95} Take`;
        } else if (currencyName == 'CAD') {
            return `Total ${amount * 68.21} Take`;
        } else if (currencyName == 'POUND') {
            return `Total ${amount * 115.99} Take`;
        } else if (currencyName == 'EURO') {
            return `Total ${amount * 97.49} Take`;
        }
        else{
            return alert('Something wrong, please try again.');
        }
    }
}


let obj = new Main(); 

console.log(obj.age());
console.log(obj.area('square',100));
console.log(obj.area('rectangle',33,33));
console.log(obj.area('traingle',30,50));
console.log(obj.ageCalculator());
console.log(obj.bmiCalculator(63,1.65));
console.log(obj.converter());
