const output = document.querySelector('.output');
const caFor = document.getElementById('caFor');
caFor.addEventListener('submit', function (e) {

    e.preventDefault();
    let date = this.querySelector('input[name="date"]').value;
    let timeStart = new Date(date);
    let timeEnd = new Date();

    setTimeout(() => {

        let timeGap = Math.floor(Math.abs(timeEnd.getTime() - timeStart.getTime()));

        let total_sec   = Math.floor(timeGap / 1000);
        let total_min   = Math.floor(total_sec / 60);
        let total_hours = Math.floor(total_min / 60);
        let total_day   = Math.floor(total_hours / 24);
        let total_week  = Math.floor(total_day / 7);
        let total_month = Math.floor(total_day / 30);
        let total_year  = Math.floor(total_month / 12);

        output.innerHTML = ` 
            <b>Age</b> : 
            <br> Total year: ${ total_year } <br> 
            Total Month: ${ total_month } <br>
            Total Week: ${ total_week } <br> 
            Total day: ${ total_day } <br> 
            Total hours: ${ total_hours } <br> 
            Total nin: ${ total_min } <br> 
            Total sec: ${ total_sec }
        `;
    }, 1000);













});