function encodeAndDecodeMessages() {
    let [sendButton, readButton] = document.querySelectorAll('button');
    let [sendText, readText] = document.querySelectorAll('textarea');
    sendButton.addEventListener('click', encode);

    function encode() {
        let text = sendText.value;
        let encodedMessage = [];
        for (let i = 0; i < text.length; i++) {
            let newLetterAscii = text.charCodeAt(i) + 1;
            let newLetter = String.fromCharCode(newLetterAscii);
            encodedMessage.push(newLetter);
            
        }
        readText.value = encodedMessage.join('');
        sendText.value = '';    
    }

    readButton.addEventListener('click', decode);
    function decode(){
        let text = readText.value;
        let decodedMessage = [];
        for (let i = 0; i < text.length; i++) {
            let newLetterAscii = text.charCodeAt(i) - 1;
            let newLetter = String.fromCharCode(newLetterAscii);
            decodedMessage.push(newLetter);          
        }
        readText.value = decodedMessage.join('');
    }
}