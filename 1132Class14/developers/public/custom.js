// function start       
/**
 * localStorage set data
 * @param {*} key 
 * @param {*} value 
 */
function lsDataSet(key, value) {
    let jasonToString = JSON.stringify(value);
    localStorage.setItem(key, jasonToString);
}
/**
 * localStorage get data
 * @param {*} key 
 */
function lsDataGet(key) {
    let lsData =  localStorage.getItem(key);
    return JSON.parse(lsData);
}
// function end     

const dev_form      = document.getElementById('dev_form');
const d_card_parent = document.getElementById('d_card_parent');

dev_form.addEventListener('submit', function (e) {
    e.preventDefault();
    let dev_name = this.querySelector('input[name="d_name"]');
    let skills = this.querySelectorAll('input[name="skill"]:checked');
    let gender = this.querySelector('input[type="radio"]:checked');
    let photo_url = this.querySelector('input[name="i_url"]');

    let skillArray = [];

    for (let i = 0; i < skills.length; i++) {
        skillArray.push(skills[i].value);
    }

    let lsArrayData;
    if (lsDataGet('dev')) {
        lsArrayData = lsDataGet('dev');
    } else {
        lsArrayData = [];
    }

    lsArrayData.push({
        dev_name : dev_name.value,
        skills   : skillArray,
        gender   : gender.value,
        photo_url: photo_url.value
    });

    lsDataSet('dev', lsArrayData);
    allDevelopersData();
});

allDevelopersData();
function allDevelopersData() {

    let products = lsDataGet('dev');
    let emptyData = '';
    products.forEach(element => {
        emptyData += `
        <div class="card m-2 col-md-4">
            <img src="${element.photo_url}"
                class="card-img-top" alt="">
            <div class="card-body">
                <div class="card-title">
                    <h3>${element.dev_name}</h3>
                    <small class="text-muted">${element.gender}</small>
                </div>
            </div>
            <div class="card-footer">
                <strong>${element.skills}</strong>
            </div>
        </div>
        `;
    });
    d_card_parent.innerHTML = emptyData
}