// Digital Clock Start  
const clock = document.querySelector('.clock');
setInterval(() => {
    let date = new Date();
    clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);
// Digital Clock End

// Counter with Loader Start

const start   = document.querySelector('#start');
const stop    = document.querySelector('#stop');
const reset   = document.querySelector('#reset');
const counter = document.querySelector('#counter');

counter.innerHTML = '⬜';
let counterTime;
let counterValue = 0;
start.addEventListener('click', () =>{
    counterTime =  setInterval(() => {
        counter.innerHTML = counterValue;
        counterValue++;
    }, 1000);
});

stop.addEventListener('click', () =>{
    clearInterval(counterTime);
});

reset.addEventListener('click', () =>{
    counterValue = 0;
    counter.innerHTML = counterValue;
    clearInterval(counterTime);
});








// Counter with Loader End
