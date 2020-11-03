function solve() {
  let [generateButton, buyButton] = document.querySelectorAll('button');
  let [jsonText, boughtText] = document.querySelectorAll('textarea');
  let tableBodyElement = document.querySelectorAll('tbody')[0];
  generateButton.addEventListener('click', generate)

  function generate(){
    let itemsArray = JSON.parse(jsonText.value);
    itemsArray.forEach((product) => {
      let newElement = `<tr>\n
      <td><img src="${product.img}"></td>\n
      <td><p>${product.name}</p></td>\n
      <td><p>${product.price}</p></td>\n
      <td><p>${product.decFactor}</p></td>\n
      <td><input type="checkbox" /></td>\n
      </tr>`
      tableBodyElement.innerHTML += newElement;
    });
  }

  buyButton.addEventListener('click', buy)

  function buy(){
    let [names, price, decFactors] = [[], 0, []];
    //let productElements = [...tableBodyElement.children]; 
    [...document.querySelectorAll('tbody tr')].forEach(productElement => {
      if (productElement.querySelector('input').checked) {
        let pElements = productElement.querySelectorAll('p');
        names.push(pElements[0].textContent)
        price+= Number(pElements[1].textContent);
        decFactors.push(Number(pElements[2].textContent))
      }
    });
    let averageDecFactor = decFactors.reduce((sum, num) => sum += num) / decFactors.length;
    boughtText.textContent =`Bought furniture: ${names.join(', ')}\nTotal price: ${price.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`;
  }
}