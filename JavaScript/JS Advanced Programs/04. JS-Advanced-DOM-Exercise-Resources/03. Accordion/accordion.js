function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let para = document.getElementById('extra');

    if (button.textContent == 'More') {
        button.textContent = 'Less';
        para.style.display = 'block';
    } else {
        button.textContent = 'More';
        para.style.display = 'none';
    }
}