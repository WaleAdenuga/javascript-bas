// innerHTML gives everything inside element, including the spaces
// want to avoid spaces, use innerText
// classList is a property of an element that allows you to add and remove classes
function clickSubscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
        // add a class to the element, note you don't use the dot like in qquery selector
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        // remove a class from the element
        buttonElement.classList.remove('is-subscribed');
    }
}

function clickCalculate() {
    const inputElement = document.querySelector('.js-cost-input');
    // input doesn't have an innerHTML, but it does have a value property, that's how you get the value within
    // value is not a number, it's a string, value from dom is always a string

    // reset message after initial click
    document.querySelector('.js-error').innerHTML = '';
    document.querySelector('.total-cost').innerHTML = '';

    let cost = Number (inputElement.value); //type casting like C?

    if (cost < 0) {
        // don't forget that you need the dot to check a class from query selector
        document.querySelector('.js-error').innerHTML = 'Error: Cost cannot be less than 0';
        // stop code earlier
        return;
    }

    if (cost < 40 ) {
        cost = parseFloat(cost + 10).toFixed(2);
    }
    document.querySelector('.total-cost').innerHTML = `$${cost}`;
}

function handleCostKeyDown(event) {
    if (event.key === 'Enter') {
        clickCalculate();
    }
}

