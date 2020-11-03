function solve() {
   let playerOneCardsDiv = document.getElementById('player1Div');
   let playerTwoCardsDiv = document.getElementById('player2Div');
   let resultDiv = document.getElementById('result');
   let historyDiv = document.getElementById('history');

   playerOneCardsDiv.addEventListener('click', selectCardP1)

   function selectCardP1(event) {
      if (event.target.tagName != 'div') {
         let player1Card = event.target;
         let cardValue = player1Card.name;
         player1Card.src = 'images/whiteCard.jpg';

         let [player1Span, vs, player2Span] = resultDiv.querySelectorAll('span'); // check if [...] needs to be added
         player1Span.textContent = cardValue;

         if (player2Span.textContent != '') {
            let player2Card = [...playerTwoCardsDiv.querySelectorAll('img')].reduce((p2Card, curr) => {
               if (curr.name == player2Span.textContent) {
                  p2Card = curr;
                  return p2Card;
               }
               return p2Card;
            });

            if (Number(player1Span.textContent) > Number(player2Span.textContent)) {
               player1Card.style.border = '2px solid green';
               player2Card.style.border = '2px solid red';
            } else {
               player1Card.style.border = '2px solid red';
               player2Card.style.border = '2px solid green';
            }

            historyDiv.textContent += `[${player1Span.textContent} vs ${player2Span.textContent}] `;
            player1Span.textContent = '';
            player2Span.textContent = '';
         }
      }
   }

   playerTwoCardsDiv.addEventListener('click', selectCardP2)
   
   function selectCardP2(event) {
      if (event.target.tagName != 'div') {
         let player2Card = event.target;
         let cardValue = player2Card.name;
         player2Card.src = 'images/whiteCard.jpg';

         let [player1Span, vs, player2Span] = resultDiv.querySelectorAll('span'); // check if [...] needs to be added
         player2Span.textContent = cardValue;

         if (player1Span.textContent != '') {
            let player1Card = [...playerOneCardsDiv.querySelectorAll('img')].reduce((p1Card, curr) => {
               if (curr.name == player1Span.textContent) {
                  p1Card = curr;
                  return p1Card;
               }
               return p1Card;
            });

            if (Number(player1Span.textContent) > Number(player2Span.textContent)) {
               player2Card.style.border = '2px solid green';
               player1Card.style.border = '2px solid red';
            } else {
               player2Card.style.border = '2px solid red';
               player1Card.style.border = '2px solid green';
            }

            historyDiv.textContent += `[${player1Span.textContent} vs ${player2Span.textContent}] `;
            player1Span.textContent = '';
            player2Span.textContent = '';
         }
      }
   }
}