// instant checkbox get start
const skills = document.querySelectorAll('input[type="checkbox"]');
const list_group = document.querySelector('.list-group');

skills.forEach(element => {
    element.addEventListener('change', function () {
        let allData = document.querySelectorAll('input[type="checkbox"]:checked');

        $emptyArr = [];
        allData.forEach(data => {
            $emptyArr.push(data.value);
        });

        let dataList = '';
        $emptyArr.forEach(data_value => {
            dataList += `<li class="list-group-item">${data_value}</li>`;
        });
        list_group.innerHTML = dataList;
    })
});
// instant checkbox get end

// calculator start

let all_value = [];
let valGet = (val) => {
    all_value.push(val);
    document.querySelector('.stackValue').innerHTML = all_value.join('');
}

let finalRes = () => {
    let result = all_value.join('');
    document.querySelector('.finalValue').innerHTML = eval(result);
}

let allCel = () => {
    all_value = [];
    document.querySelector('.stackValue').innerHTML = 0;
    document.querySelector('.finalValue').innerHTML = 0;
}
let back = () => {
    all_value.pop();
    document.querySelector('.stackValue').innerHTML = all_value.join('');
}

// calculator end

// clock start
const secends = document.querySelector('.s');
const minutes = document.querySelector('.m');
const hours = document.querySelector('.h');

setInterval(() => {

    let time = new Date();

    let currentsecends = time.getSeconds();
    let current_minutes = time.getMinutes();
    let current_hours = time.gethours();

    secends.style.transform = `rotate(${clockStick(60,currentsecends)}deg)`;
    minutes.style.transform = `rotate(${clockStick(60,current_minutes)}deg)`;
    hours.style.transform = `rotate(${clockStick(12,current_hours)}deg)`;

}, 1000);

function clockStick(time, current) {
    return (300 * current) / time;
}

// clock end