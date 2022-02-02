// instant checkbox get start
const skills = document.querySelectorAll('input[type="checkbox"]');
const list_group = document.querySelector('.list-group');

skills.forEach(element => {
    element.addEventListener('change',function () {
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
    document.querySelector('.stackValue').innerHTML = 0 ;
    document.querySelector('.finalValue').innerHTML = 0;
}
let back = () => {
    all_value.pop();
    document.querySelector('.stackValue').innerHTML = all_value.join('');
}









// calculator end