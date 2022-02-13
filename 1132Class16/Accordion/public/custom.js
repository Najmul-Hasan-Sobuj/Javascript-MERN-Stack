const accordion_header = document.querySelectorAll('.accordion_header');
// const accordion_body = document.querySelector('.accordion_body');

accordion_header.forEach(element => {
    element.addEventListener('click', function () {
        element.classList.toggle('active');
        if (element.classList.contains('active')) {
            element.nextElementSibling.style.height = '100px';
        } else {
            element.nextElementSibling.style.height = '0px';
        }
    });
});