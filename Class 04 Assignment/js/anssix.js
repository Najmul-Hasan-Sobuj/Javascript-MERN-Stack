// Create a currency converter function from taka to USD, CAD, POUND, EURO etc

let currencyName = prompt("Enter Currency Name");
let amount = prompt("Enter Total Amount");

let converter = () => {
    if (currencyName == 'USD') {
        return `${amount * 85.95}`;
    } else if (currencyName == 'CAD') {
        return `${amount * 68.21}`;
    } else if (currencyName == 'POUND') {
        return `${amount * 115.99}`;
    } else if (currencyName == 'EURO') {
        return `${amount * 97.49}`;
    }
    else{
        return alert('Something wrong, please try again.');
    }
}
console.log(converter());