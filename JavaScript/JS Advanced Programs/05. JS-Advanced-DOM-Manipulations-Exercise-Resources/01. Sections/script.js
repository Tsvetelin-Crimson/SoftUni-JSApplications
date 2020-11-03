function create(words) {
   let contentElement = document.getElementById('content');
   words.forEach(word => {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.textContent = word;
      pElement.style.display = 'none';

      divElement.addEventListener('click', () => {
         pElement.style.display = 'block'
      });

      divElement.appendChild(pElement);
      contentElement.appendChild(divElement);
   })
}