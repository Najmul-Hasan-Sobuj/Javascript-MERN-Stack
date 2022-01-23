
// const products = [{
//         name: 'T-shart',
//         price: 12,
//         sprice: 50,
//         photo: 'https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300'
//     },
//     {
//         name: 'T-shart',
//         price: 77,
//         sprice: 100,
//         photo: 'https://cdn.dribbble.com/users/131151/screenshots/14372796/media/8923674bd3ecf70a8eef977588581c82.png?compress=1&resize=400x300'
//     },
//     {
//         name: 'T-shart',
//         price: 45,
//         sprice: 56,
//         photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyehB63Fkvu2O1zeJB0wtNrPIiAmpcMQQ3Q&usqp=CAU'
//     },
// ];

// setData_ls('products', products)
// /**
//  * set data to localStorage
//  * @param {*} key 
//  * @param {*} value 
//  */
// function setData_ls(key, value) {
//     let lsData = JSON.stringify(value);
//     localStorage.setItem(key, lsData);
// }

let lsdataget = getData_ls('products');
/**
 * get data from localStorage
 * @param {*} key 
 */
function getData_ls(key) {
    let lsData = localStorage.getItem(key);
    return lsData ? JSON.parse(lsData) : false;
}

const p_data = document.querySelector('.p_data');
const p_form = document.querySelector('#p_form');

p_form.addEventListener('submit',function(e) {
    e.preventDefault();
    let p_name = this.querySelector('input[name = "p_name"]').value;
    let p_price = this.querySelector('input[name = "p_price"]').value;
    let p_s_price = this.querySelector('input[name = "p_s_price"]').value;
    let p_img = this.querySelector('input[name = "p_img"]').value;
    console.log(p_name + p_price + p_s_price + p_img);
});


lsdataget.forEach(element => {
    p_data.innerHTML += `
        <div class="col-md-4">
            <div class="card m-2">
                <img src="${element.photo}" class="card-img-top img-fluid" alt="">
                <div class="card-body">
                    <div class="card-title">
                        <h4>${element.name}</h4>
                    </div>
                    <span class="text-muted">$${element.price}<del>$${element.sprice}</del> </span>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn rounded-pill btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    `;
});