function solve() {
    let clearButtonElement = document.getElementsByClassName('clear')[0];
    let expresionElement = document.getElementById('expressionOutput');
    let resultElement = document.getElementById('resultOutput');
    let keysElements = document.getElementsByClassName('keys')[0];

    clearButtonElement.addEventListener('click', () => {
        expresionElement.textContent = '';
        resultElement.textContent = '';
    })

    keysElements.addEventListener('click', whenClicked)

    function whenClicked(event) {
        let targetValue = event.target.value;
        console.log()
        switch (targetValue) {
            case '+':
            case '-':
            case '/':
            case '*':
                expresionElement.textContent += ` ${targetValue} `;
                break;
            case '=':
                let [firstOperand, operator, secondOperand] = expresionElement.textContent.split(' ');

                if (operator && secondOperand) {
                    let result = calculateExpresion(Number(firstOperand), operator, Number(secondOperand));
                    resultElement.textContent = result;
                } else {
                    resultElement.textContent = NaN;
                }
                break;
            default:
                expresionElement.textContent += targetValue;
                break;
        }

    }

    function calculateExpresion(firstOperand, operator, secondOperand) {
        switch (operator) {
            case '+':
                return firstOperand + secondOperand;
            case '-':
                return firstOperand - secondOperand;
            case '/':
                return firstOperand / secondOperand;
            case '*':
                return firstOperand * secondOperand;
        }
        return;
    }
}