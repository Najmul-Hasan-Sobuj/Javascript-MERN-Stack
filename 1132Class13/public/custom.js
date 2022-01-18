// Digital Clock Start  
const clock = document.querySelector('.clock');
setInterval(() => {
    let date = new Date();
    clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);
// Digital Clock End

// Counter with Loader Start

const start        = document.querySelector('#start');
const stop         = document.querySelector('#stop');
const reset        = document.querySelector('#reset');
const counter      = document.querySelector('#counter');
const inputValue   = document.querySelector('#input');
const inputBtn     = document.querySelector('#inputBtn');
const progress_bar = document.querySelector('#progress_bar');

counter.innerHTML = '▶';
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

let newCounter;
let newSetInput;
inputBtn.addEventListener('click', () =>{
    newCounter  = inputValue.value;
    
    newSetInput = setInterval(() =>{
        progress_bar.style.width = `${loader(inputValue.value,newCounter)}%`;
        counter.innerHTML = newCounter;
        if (newCounter == 0) {
            clearInterval(newSetInput);
            counter.innerHTML = '▶';
        }
        newCounter--;
    },1000);
});

/**
 * progress bar loader
 * @param {*} startValue 
 * @param {*} currentValue 
 * @returns 
 */
function loader(startValue, currentValue) {
    return (currentValue*100)/startValue;
}
// Counter with Loader End
