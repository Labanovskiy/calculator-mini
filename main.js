const numberInput = document.querySelector('#number');
const rangeInput = document.querySelector('#range');
const basePrice = 3000;
const inputs = document.querySelectorAll('input');
const totalSum = document.querySelector('#total-sum');


const radioBulding = document.querySelectorAll('input[name="bulding"]');
const radioHouse = document.querySelectorAll('input[name="house"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const floor = document.querySelector('input[name="floor"]');
const celling = document.querySelector('input[name="celling"]');
const walls = document.querySelector('input[name="walls"]');

rangeInput.addEventListener('input', function() {
    numberInput.value = rangeInput.value;
});

numberInput.addEventListener('input', function() {
    rangeInput.value = numberInput.value;
});

function calculate() {
    let totalPrice = basePrice * parseInt(numberInput.value);

    for (const radio of radioBulding) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    };

    for (const radio of radioHouse) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    };

    for (const radio of radioRooms) {
        if (radio.checked === true) {
            totalPrice = totalPrice * parseFloat(radio.value);
        }
    };

    if (floor.checked === true) {
        totalPrice = totalPrice * parseFloat(floor.value);
    };
    if (celling.checked === true) {
        totalPrice = totalPrice * parseFloat(celling.value);
    };
    if (walls.checked === true) {
        totalPrice = totalPrice * parseFloat(walls.value);
    };


    

    const formatter = new Intl.NumberFormat('ua');
    totalSum.innerText = formatter.format(totalPrice);
};
calculate();



for (const input of inputs) {
    
    input.addEventListener('input', function() {
        calculate();
    });
};