function lockedProfile() {
    Array.from(document.getElementsByClassName('profile')).forEach(parent => {
        let btn = parent.querySelector('button');
        btn.addEventListener('click', () => {
        let unlockRadio = parent.querySelectorAll('input')[1];
            if (unlockRadio.checked) {
                let hiddenDivElement = parent.querySelectorAll('div')[0];
                if (btn.textContent === 'Show more') {
                    hiddenDivElement.style.display = 'block';
                    btn.textContent = 'Hide it';
                } else {
                    hiddenDivElement.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            }
        })
    });
}