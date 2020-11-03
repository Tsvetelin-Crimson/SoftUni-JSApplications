function subtract() {
    let numbersElement = document.getElementsByTagName('input');
    let number1 = Number(numbersElement[0].value);
    let number2 = Number(numbersElement[1].value);

    let result = number1 - number2;

    let resultElement = document.querySelector('div#result');
    resultElement.innerHTML = result;
}