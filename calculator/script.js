let display = document.getElementById('display');
let displayValue = '';

function appendNumber(number) {
    displayValue += number;
    display.value = displayValue;
}

function appendOperator(operator) {
    displayValue += ` ${operator} `;
    display.value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    display.value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.trim();
    if (displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        display.value = displayValue;
    }
}

function calculate() {
    try {
        displayValue = eval(displayValue.replace('×', '*').replace('÷', '/'));
        display.value = displayValue;
    } catch (error) {
        display.value = 'Error';
    }
}
