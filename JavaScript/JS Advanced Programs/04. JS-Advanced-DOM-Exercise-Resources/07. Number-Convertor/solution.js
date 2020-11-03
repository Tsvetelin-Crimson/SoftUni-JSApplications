function solve() {
    let toElement = document.getElementById('selectMenuTo');
    let buttonElement = document.getElementsByTagName('button')[0];
    let inputElement = document.getElementById('input');
    let resultElement = document.getElementById('result');

    toElement.children[0].remove();

    let binaryOptionElement = document.createElement('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    let hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';

    toElement.appendChild(binaryOptionElement);
    toElement.appendChild(hexadecimalOptionElement);

    buttonElement.addEventListener('click', convert)

    function convert() {
        let value = Number(inputElement.value);
        //toElement.value = 'binary';
        let toValue = toElement.options[toElement.selectedIndex].value;

        if (toValue == 'binary') {
            value = value.toString(2);
            resultElement.value = value;
            resultElement.textContent = value;
        } else if (toValue == 'hexadecimal') {
            value = value.toString(16).toUpperCase();
            resultElement.textContent = value;
            resultElement.value = value;
        }
    }
}