// function start
/**
 * set data to localStorage
 * @param {*} key 
 * @param {*} value 
 */
function setDataLs(key, value) {
    let data = JSON.stringify(value);
    localStorage.setItem(key, data);
    return true;
} 
/**
 * get dala from localStorage
 * @param {*} key 
 */
function getDataLs(key) {
    let data = localStorage.getItem(key);
    return data ? JSON.parse(data) : false ;
}  
// function end  
const p_form = document.getElementById('p_form');
const p_data = document.querySelector('.p_data');


p_form.addEventListener('submit', function (e) {
    e.preventDefault();

    let p_name    = this.querySelector('input[name = "p_name"]');
    let p_price   = this.querySelector('input[name = "p_price"]');
    let p_s_price = this.querySelector('input[name = "p_s_price"]');
    let p_img     = this.querySelector('input[name = "p_img"]');

    let dataArray;
    if (getDataLs('products')) {
        dataArray = getDataLs('products');
    }else{
        dataArray = [];
    }

    dataArray.push({
        p_name   : p_name,
        p_price  : p_price,
        p_s_price: p_s_price,
        p_img    : p_img
    });
    console.log(dataArray);

    setDataLs('products', dataArray);
    allProducts();

});

allProducts();
function allProducts() {
    let allProducts = getDataLs('products');
    let Empty = '';
    allProducts.forEach(element => {
        Empty += `
        <div class="col-md-4">
            <div class="card m-2">
                <img src="${element.p_img}" class="card-img-top img-fluid" alt="">
                <div class="card-body">
                    <div class="card-title">
                        <h4>${element.p_name}</h4>
                    </div>
                    <span class="text-muted">$${element.p_price} <del>$${element.p_s_price}</del> </span>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn rounded-pill btn-primary">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
    p_data.innerHTML = Empty;
}