// add to product project start
const p_data = document.querySelector('.p_data');
const p_form = document.getElementById('p_form');


const products = [{
        name: 'T-shart',
        price: 23,
        sale: 50,
        photo: 'https://www.oxfordshiremind.org.uk/app/uploads/2019/08/tshirt.png',
    },
    {
        name: 'T-shart',
        price: 23,
        sale: 50,
        photo: 'https://5.imimg.com/data5/FJ/GS/MY-2101395/bullet-crosshatch-t-shirt-500x500.jpg',
    },
    {
        name: 'T-shart',
        price: 23,
        sale: 50,
        photo: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631028589-screen-shot-2021-09-07-at-11-29-13-am-1631028561.png?crop=0.829xw:0.843xh;0.0657xw,0.0783xh&resize=480:*',
    },
];

dataSet('product', products);
/**
 * data set to localStorage
 * @param {*} key 
 * @param {*} value 
 */
function dataSet(key, value) {
    let productsDataSet = JSON.stringify(value);
    localStorage.setItem(key, productsDataSet);
}


let vari = dataget('product');
/**
 * data get from localStorage
 * @param {*} key 
 * @returns 
 */
function dataget(key) {
    let productsDataGet = localStorage.getItem(key);
    return productsDataGet ? JSON.parse(productsDataGet) : false;
}

p_form.addEventListener('submit', function(e) {
    e.preventDefault();
    let p_name    = this.querySelector('input[name = "p_name"]').value;
    let p_price   = this.querySelector('input[name = "p_price"]').value;
    let p_s_price = this.querySelector('input[name = "p_s_price"]').value;
    let p_img     = this.querySelector('input[name = "p_img"]').value;
    console.log(p_name + p_price + p_s_price + p_img );
});

vari.forEach(element => {
    p_data.innerHTML += `
    <div class="col-md-4">
        <div class="card m-2">
            <img src="${element.photo}" class="card-img-top img-fluid" alt="">
            <div class="card-body">
                <div class="card-title">
                    <h4>${element.name}</h4>
                </div>
                <span class="text-muted">$${element.price} <del>$${element.sale}</del> </span>
                <div class="d-flex justify-content-end">
                    <button type="submit" class="btn rounded-pill btn-primary">add to cart</button>
                </div>
            </div>
        </div>
    </div>
    `;
});




// add to product project end