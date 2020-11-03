function solve() {
    let buttonDiv = document.querySelectorAll('.form-control')[3];
    buttonDiv.children[0].addEventListener('click', (e) => {
        e.preventDefault();
        let [lectureNameDiv, dateDiv, moduleDiv] = document.querySelectorAll('.form-control');
        console.log(lectureNameDiv.children[1].value) // remove next 3 when done
        console.log(dateDiv.children[1].value)
        console.log(moduleDiv.children[1].value)
        if (lectureNameDiv.children[1].value == '' || dateDiv.children[1].value == '' || moduleDiv.children[1].value == 'Select module') {
            return;
        }
        let modulesEl = document.querySelectorAll('.modules')[0];
        let h3IsContained = Array.from(document.querySelectorAll('.modules h3')).find(h => h.textContent == `${moduleDiv.children[1].value.toUpperCase()}-MODULE`)
        if (!h3IsContained) {
            let divElement = document.createElement('div');
            divElement.classList.add('module')
            let h3El = document.createElement('h3');
            h3El.textContent = `${moduleDiv.children[1].value.toUpperCase()}-MODULE`;
            
            let ulEl = document.createElement('ul');
            let liEl = document.createElement('li');
            let h4El = document.createElement('h4');
            let buttonEl = document.createElement('button');

            liEl.classList.add('flex')

            let [date, time] = dateDiv.children[1].value.split('T');
            date = date.split('-').join('/')

            h4El.textContent = `${lectureNameDiv.children[1].value} - ${date} - ${time}`

            buttonEl.classList.add('red');
            buttonEl.textContent = 'Del'

            buttonEl.addEventListener('click', (e) => {
                let currUlEl = e.currentTarget.parentElement.parentElement;
                if (currUlEl.children.length == 1) {
                    currUlEl.parentElement.remove();
                } else {
                    e.currentTarget.parentElement.remove();
                }
            })

            liEl.appendChild(h4El);
            liEl.appendChild(buttonEl);

            ulEl.appendChild(liEl);

            divElement.appendChild(h3El);
            divElement.appendChild(ulEl);

            modulesEl.appendChild(divElement);

        } else {
            let foundUlEl = h3IsContained.nextSibling;
            let liEl = document.createElement('li');
            let h4El = document.createElement('h4');
            let buttonEl = document.createElement('button');

            liEl.classList.add('flex')

            let [date, time] = dateDiv.children[1].value.split('T'); 
            date = date.split('-').join('/')

            h4El.textContent = `${lectureNameDiv.children[1].value} - ${date} - ${time}`

            buttonEl.classList.add('red');
            buttonEl.textContent = 'Del'

            buttonEl.addEventListener('click', (e) => {
                let currUlEl = e.currentTarget.parentElement.parentElement;
                if (currUlEl.children.length == 1) {
                    currUlEl.parentElement.remove();
                } else {
                    e.currentTarget.parentElement.remove();
                }
            }) // add this later

            liEl.appendChild(h4El);
            liEl.appendChild(buttonEl);

            foundUlEl.appendChild(liEl);

            let sortedChildren = Array.from(foundUlEl.children).sort((curr, next) => {
                let firstDate = Array.from(curr.children)[0].textContent.split(' - ')[1]
                let secondDate = Array.from(next.children)[0].textContent.split(' - ')[1]
                let result = firstDate.localeCompare(secondDate)
                return result;
            })

            sortedChildren.forEach(li => foundUlEl.appendChild(li))
        }
    })

};