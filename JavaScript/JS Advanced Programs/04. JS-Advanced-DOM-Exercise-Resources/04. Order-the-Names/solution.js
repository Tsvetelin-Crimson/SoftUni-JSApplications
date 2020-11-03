function solve() {
    let buttonElement = document.getElementsByTagName('button')[0];
    let input = document.getElementsByTagName('input')[0];

    let database = {};
    let index = 0;
    for (let i = 65; i <= 90; i++) {
        let letter = String.fromCharCode(i);
        database[letter] = index;
        index++;
    }

    buttonElement.addEventListener('click', addName)

    function addName(){
        let currInput = input.value;
        let listElement = document.getElementsByTagName('ol')[0].children;
        let fixedInput = currInput[0].toUpperCase() + currInput.slice(1).toLocaleLowerCase();

        if (database[fixedInput[0]] !== undefined) {
            let letterIndex = database[fixedInput[0]];
            
            if (listElement[letterIndex].textContent) {
                listElement[letterIndex].textContent += ', '
            }

            listElement[letterIndex].textContent += fixedInput;
        }
        input.value = '';
    }
}