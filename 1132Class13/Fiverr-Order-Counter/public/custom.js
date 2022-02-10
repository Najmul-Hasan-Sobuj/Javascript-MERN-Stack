// Fiverr Order Counter timer Start  
const fiv_form = document.getElementById('fiv_form');
const counter = document.getElementById('counter');

fiv_form.addEventListener('submit', function (e) {
    e.preventDefault();
    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;

    setInterval(() => {
        let startTime = new Date();
        let endTime = new Date(date + ' ' + time);

        let time_gap = Math.floor(Math.abs(endTime.getTime() - startTime.getTime()));

        let total_sec = Math.floor(time_gap / 1000);
        let total_min = Math.floor(total_sec / 60);
        let total_hour = Math.floor(total_min / 60);
        let total_day = Math.floor(total_hour / 24);

        let hours = total_hour - (total_day * 24);
        let min = total_min - (total_day * 24 * 60) - (hours * 60);
        let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);

        counter.innerHTML = `${total_day > 9 ? total_day: '0' +total_day}: ${hours > 9 ? hours: '0' +hours} : ${min > 9 ? min: '0' +min}: ${sec > 9 ? sec: '0' +sec}`;
        
    }, 1000);
});
// Fiverr Order Counter timer End