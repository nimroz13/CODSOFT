document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.screen');
    const equationDisplay = document.querySelector('.equation');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '0';
    let equation = '';
    let shouldEvaluate = false;
    let lastResult = null;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button);
        });
    });

    document.addEventListener('keydown', function (event) {
        handleKeyPress(event);
    });

    function handleButtonClick(button) {
        const value = button.textContent;
        if (button.classList.contains('number')) {
            handleNumber(value);
        } else if (button.classList.contains('decimal')) {
            handleDecimal();
        } else if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (button.classList.contains('equals')) {
            evaluateEquation();
        } else if (button.classList.contains('clear')) {
            clearAll();
        } else if (button.classList.contains('backspace')) {
            handleBackspace();
        }
    }

    function handleKeyPress(event) {
        if (['+', '-', '*', '/', '=', 'Enter', 'Escape', 'Backspace', 'Delete'].includes(event.key)) {
            event.preventDefault();
        }
        if (/^[0-9]$/.test(event.key)) {
            handleNumber(event.key);
        } else if (['+', '-'].includes(event.key)) {
            handleOperator(event.key);
        } else if (event.key === '*') {
            handleOperator('×');
        } else if (event.key === '/') {
            handleOperator('÷');
        } else if (event.key === '=' || event.key === 'Enter') {
            evaluateEquation();
        } else if (event.key === 'Delete' || event.key.toLowerCase() === 'c') {
            clearAll();
        } else if (event.key === '.') {
            handleDecimal();
        } else if (event.key === 'Backspace') {
            handleBackspace();
        }
    }

    function handleNumber(num) {
        if (shouldEvaluate) {
            currentInput = num;
            shouldEvaluate = false;
        } else if (currentInput === '0') {
            currentInput = num;
        } else {
            currentInput += num;
        }
        updateDisplay();
    }

    function handleDecimal() {
        if (shouldEvaluate) {
            currentInput = '0.';
            shouldEvaluate = false;
        } else if (!currentInput.includes('.')) {
            currentInput += '.';
        }
        updateDisplay();
    }

    function handleOperator(op) {
        if (lastResult !== null && shouldEvaluate) {
            equation = lastResult + ' ' + op + ' ';
            shouldEvaluate = false;
        } else {
            equation += currentInput + ' ' + op + ' ';
            shouldEvaluate = true;
        }
        lastResult = null;
        currentInput = '0';
        updateDisplay();
    }

    function evaluateEquation() {
        const fullEquation = equation + currentInput;
        if (!fullEquation.trim()) return;
        try {
            let expressionToEvaluate = fullEquation.replace(/×/g, '*').replace(/÷/g, '/');
            const result = new Function('return ' + expressionToEvaluate)();
            lastResult = result.toString();
            currentInput = lastResult;
            equation = '';
            shouldEvaluate = true;
            updateDisplay();
        } catch (error) {
            currentInput = 'Error';
            equation = '';
            updateDisplay();
            setTimeout(() => {
                clearAll();
            }, 1500);
        }
    }

    function handleBackspace() {
        if (currentInput.length > 1) {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput = '0';
        }
        updateDisplay();
    }

    function clearAll() {
        currentInput = '0';
        equation = '';
        lastResult = null;
        shouldEvaluate = false;
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = currentInput;
        equationDisplay.textContent = equation;
    }

    updateDisplay();
});
