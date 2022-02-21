const cardParent = document.querySelector('#parentCard');

fetch('https://fakestoreapi.com/products').then(data => data.json()).then(data => {

    let products = '';
    data.forEach(element => {
        products += `
    <div class="col-md-4">
        <div class="card m-3">
            <img src="${element.image}" class="card-img-top"
                alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <a href="#" onclick="getID(${element.id})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-primary">View</a>
            </div>
        </div>
    </div>
    `;
    });

    cardParent.innerHTML = products;

});

function getID(id) {
    const modalParent = document.querySelector('#modalParent');

    fetch('https://fakestoreapi.com/products/' + id).then(data => data.json()).then(data => {

    modalParent.innerHTML = `
        <div class="col-md-12">
            <img src="${data.image}"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p class="card-text">${data.description}</p>
            </div>
        </div>
        `;
    });

}