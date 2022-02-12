// modal 
const modal_one_button = document.querySelector('#apply');
const modal_one        = document.querySelector('.modal_one');
const close_modal      = document.querySelector('.mclose');
// alert
const alert_one        = document.querySelector('.alert_one');
const close_alert      = document.querySelector('.a_close');
const keep             = document.querySelector('#keep');
const discard = document.querySelector('#discard');


modal_one_button.addEventListener('click', function (e) {
    e.preventDefault();
    modal_one.classList.add('active');
});

close_modal.addEventListener('click', function () {
    alert_one.style.display = 'flex';
});

close_alert.addEventListener('click', function () {
    alert_one.style.display = 'none';
});

keep.addEventListener('click', function () {
    alert_one.style.display = 'none';
});

discard.addEventListener('click', function () {
    alert_one.style.display = 'none';
    modal_one.classList.remove('active');

});

modal_one.addEventListener('click', function (e) {
    if (e.target == this) {
        modal_one.classList.remove('active');
    }
});