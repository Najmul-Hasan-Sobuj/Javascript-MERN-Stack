const caFor = document.getElementById('caFor');
const message = document.querySelector('.message');

caFor.addEventListener('submit', function (e) {
    e.preventDefault();

    // Date of Birth Start
    let rowOneMonth = this.querySelector('#rowOneMonth');
    let rowOneDay = this.querySelector('#rowOneDay');
    let rowOneYear = this.querySelector('#rowOneYear');
    // Date of Birth end

    // Age at the Date of Start
    let rowTwoMonth = this.querySelector('#rowTwoMonth');
    let rowTwoDay = this.querySelector('#rowTwoDay');
    let rowTwoYear = this.querySelector('#rowTwoYear');
    // Age at the Date of end

    if (rowOneMonth.value == '' || rowOneDay.value == '' || rowOneYear.value == '' || rowTwoMonth.value == '' || rowTwoDay.value == '' || rowTwoYear.value == '') {
        message.innerHTML = ` <p class="alert alert-danger"> all fildes are requerd </p> `;
    }

    let date = new Date();

    // Date of Birth Start
    let rowOneMonth = date.getMonth();
    let rowOneDay = date.getDate();
    let rowOneYear = date.getFullYear();
    // Date of Birth End

    // Age at the Date of Start
    let rowTwoMonth = date.getMonth();
    let rowTwoDay = date.getDate();
    let rowTwoYear = date.getFullYear();
    // Age at the Date of end

   
    

    // const all_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // let rowOneMonth = all_months[currentDate.getMonth()];


    // document.getElementById("month").value.innerHTML = currentMonth;

});




let date = new Date();
let m = date.getMonth();
let d = date.getDate();
let y = date.getFullYear();


console.log(`month${m}day${d}year${y}`);






















// let currentDate = new Date();
// const all_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// let currentMonth = all_months[currentDate.getMonth()];

// document.getElementById("month").value.innerHTML = currentMonth;

// let currentDay =currentDate.getDate();
// document.getElementById("day").value.innerHTML = currentDay;

// let currentYear =currentDate.getFullYear();
// document.getElementById("year").innerHTML = currentDay;