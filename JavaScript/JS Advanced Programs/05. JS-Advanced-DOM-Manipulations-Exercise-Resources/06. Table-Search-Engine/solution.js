function solve() {
   let word = document.getElementById('searchField');

   document.getElementById('searchBtn').addEventListener('click', () => {
      [...document.querySelectorAll('tbody > tr')].forEach(tr => {
         if (tr.textContent.includes(word.value)) {
            tr.classList.add('select');
         } else {
            tr.classList.remove('select');
         }
      })
      word.value = '';
   })
}