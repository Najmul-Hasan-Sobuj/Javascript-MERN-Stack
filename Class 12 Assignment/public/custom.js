// 1. Create a Age Calculator with age status alert by using DOM (start)
const name       = document.getElementById('name');
const birthYear  = document.getElementById('birthYear');
const output_one = document.getElementById('output_one');
const age_ch_btn = document.getElementById('age_ch_btn');

age_ch_btn.addEventListener('click', (e) =>{
    e.preventDefault();
    if( ammount.value == '' || country.value == '' ){
        output_two.innerHTML = ` <p class="alert alert-danger"> all fildes are requerd </p> `;
    }
        output_one.innerHTML = ageCal(name.value,birthYear.value);
});

/**
 * age calculator function
 * @param {*} name 
 * @param {*} year 
 * @returns 
 */
function ageCal(name,year) {
    const d = new Date();
    var age =  d.getFullYear() - year;
    return`<p class="alert alert-success">Hi ${name} You are ${age} years old and ${age_status(age)}</p>`;
}

/**
 * age status show
 * @param {*} age 
 * @returns 
 */
function age_status(age) {

    if (age<=0 || age>=121) {
        alert("something wrong, please try again.");
    }else{
        if (age <= 7 && age > 0) {
            return "You are a children";
        }else if (age < 18 && age >= 12) {
            return "You are a teenagers";
        }else if (age >= 18 && age < 30) {
            return "You are a young";
        } else if(age >= 30 && age <= 50){
            return "You are a old";
        }
    }
}
// 1. Create a Age Calculator with age status alert by using DOM (end)


// 2. Create a Currency Converter for Pound, CAD, USD, Euro to BDT by using DOM (start)

const ammount      = document.getElementById("ammount");
const country      = document.getElementById("country");
const cur_icon      = document.getElementById("cur_icon");
const output_two   = document.getElementById("output_two");
const cur_conv_btn = document.getElementById("cur_conv_btn");

cur_conv_btn.addEventListener('click',(e) =>{

    e.preventDefault();

    if( ammount.value == '' || country.value == '' ){
        output_two.innerHTML = ` <p class="alert alert-danger"> all fildes are requerd </p> `;
    }else{
        if (country.value == 116) {
            cur_icon.innerHTML = '<b>£</b>';
        }else if(country.value == 60){
            cur_icon.innerHTML = '<b>$</b>';
        }else if(country.value == 86){
            cur_icon.innerHTML = '<b>$</b>';
        }else if(country.value == 98){
            cur_icon.innerHTML = '<b>€</b>';
        }
        let result = (ammount.value * country.value);
        output_two.innerHTML = ` <p class="alert alert-success"> <b>৳</b> ${result.toFixed(2)} BDT </p> `;
    };
});

// 2. Create a Currency Converter for Pound, CAD, USD, Euro to BDT by using DOM (end)


// 3. Create a marriage age check calculator for male and female with status (start)

const mName        = document.getElementById('mName');
const mAge         = document.getElementById('mAge');
const male         = document.getElementById('male');
const female       = document.getElementById('female');
const output_three = document.getElementById('output_three');
const mar_che_btn  = document.getElementById('mar_che_btn');

mar_che_btn.addEventListener('click', (e) => {
    e.preventDefault();    
    if( mName.value == '' || mAge.value == '' ){
        output_three.innerHTML = ` <p class="alert alert-danger"> all fildes are requerd </p> `;
    }else{
        if (male.value == 'male') {
            output_three.innerHTML = `Hi ${mName.value} ${chmale(mAge.value)}`;
        }else if (female.value == 'female'){
            output_three.innerHTML = `Hi ${mName.value} ${chfemale(mAge.value)}`;
        }
    }
});


/**
 * male marriage check function
 * @param {*} age 
 * @returns 
 */
function chmale(age) {
    if (age<=0 || age>=121) {
        alert("something wrong, please try again.")
    }else{
        if (age < 18) {
            return 'You are not eligible for marriage.';
        }else if (age >= 21){
            return 'Congress,You are eligible for marriage.';
        }
    }
}

/**
 * female marriage check function
 * @param {*} age 
 * @returns 
 */
function chfemale(age) {
    if (age<=0 || age>=121) {
        alert("something wrong, please try again.")
    }else{
        if (age < 18) {
            return 'You are not eligible for marriage.';
        }else if (age >= 18){
            return 'Congress,You are eligible for marriage.';
        }
    }
}

// 3. Create a marriage age check calculator for male and female with status (end)
