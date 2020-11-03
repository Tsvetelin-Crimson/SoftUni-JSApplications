function getArticleGenerator(articles){
    let idDivElement = document.getElementById('content') 
    function returnArticle(){
        if (articles.length > 0) {
            let divElement = document.createElement('article');
            divElement.textContent = articles.shift(1);
            idDivElement.appendChild(divElement);
        }
    }

    return returnArticle;
}