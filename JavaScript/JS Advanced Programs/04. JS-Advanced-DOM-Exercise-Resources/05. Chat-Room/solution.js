function solve() {
   let textElement = document.getElementById('chat_input');
   let buttonElement = document.getElementById('send');
   let chatElement = document.getElementById('chat_messages');


   buttonElement.addEventListener('click', sendMessage)

   function sendMessage(){
      let message = textElement.value;
      let elementToSend = document.createElement('div');
      elementToSend.classList.add('message', 'my-message');
      elementToSend.textContent = message;
      chatElement.appendChild(elementToSend);

      textElement.value = '';
   }
}


