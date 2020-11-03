function addItem() {
    let textElement = document.getElementById('newItemText');
    let dataElement = document.getElementById('newItemValue');
    let optionElement = document.createElement('option');
    optionElement.innerHTML = textElement.value;
    optionElement.value = dataElement.value;
    let selectElement = document.getElementById('menu');
    selectElement.appendChild(optionElement);

    textElement.value = '';
    dataElement.value = '';
}