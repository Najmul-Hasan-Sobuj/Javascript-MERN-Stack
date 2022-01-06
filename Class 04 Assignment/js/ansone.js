// Create a function that will return children, teenagers, young people, old people from the age
let age = () =>{
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

console.log(age ());