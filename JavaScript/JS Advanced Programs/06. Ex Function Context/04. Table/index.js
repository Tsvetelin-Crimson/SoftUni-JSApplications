function solve() {
   let tableBodyElement = document.getElementsByTagName('tbody')[0];
   let lastClickedElement;
   tableBodyElement.addEventListener('click', changeBGColor)

   function changeBGColor(e) {
      let currElement = e.target;
      if (currElement.tagName != 'tbody') {
         if (currElement.tagName != 'td') {
            currElement = currElement.parentElement;
         }
         if (currElement.style.backgroundColor === '') {
            currElement.style.backgroundColor = '#413f5e';
            if (!lastClickedElement) {
               lastClickedElement = currElement;
            } else {
               lastClickedElement.style.backgroundColor = '';
               lastClickedElement = currElement;
            }
         } else {
            currElement.style.backgroundColor = '';
         }
      }
   }
}