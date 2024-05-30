let calculation = localStorage.getItem('calculation') || '';
displayCalculation(calculation);

function updateCalculation(value) {
    calculation += value;
    displayCalculation(calculation);

    // save the calculation
    localStorage.setItem('calculation', calculation);
}

function displayCalculation(calculation) {
    const displayElement = document.querySelector('.js-calculation');
    displayElement.innerHTML = calculation;
}

function evalCalculation() {
    calculation = eval(calculation)

    displayCalculation(calculation);

    // save the calculation
    localStorage.setItem('calculation', calculation);
}

function clearCalculation() {
    calculation = '';
    displayCalculation(calculation);
    localStorage.setItem('calculation', calculation);
}