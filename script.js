document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    const equals = document.getElementById('equals');
    const clear = document.getElementById('clear');

    let currentInput = '';
    let operator = '';
    let firstOperand = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('operator')) {
                if (currentInput) {
                    firstOperand = parseFloat(currentInput);
                    operator = button.dataset.value;
                    display.value = `${firstOperand} ${operator}`; 
                    currentInput = ''; 
                }
            } else {
                currentInput += button.dataset.value;
                if (firstOperand !== null && operator) {
                    display.value = `${firstOperand} ${operator} ${currentInput}`; 
                } else {
                    display.value = currentInput; 
                }
            }
        });
    });

    equals.addEventListener('click', () => {
        if (firstOperand !== null && operator && currentInput) {
            const secondOperand = parseFloat(currentInput);
            let result;

            switch (operator) {
                case '+':
                    result = firstOperand + secondOperand;
                    break;
                case '-':
                    result = firstOperand - secondOperand;
                    break;
                case '*':
                    result = firstOperand * secondOperand;
                    break;
                case '/':
                    result = firstOperand / secondOperand;
                    break;
                default:
                    return;
            }

            display.value = result; 
            currentInput = '';
            firstOperand = null;
            operator = '';
        }
    });

    clear.addEventListener('click', () => {
        currentInput = '';
        firstOperand = null;
        operator = '';
        display.value = ''; 
    });
});
