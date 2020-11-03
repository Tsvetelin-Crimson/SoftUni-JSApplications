function solve(input) {
    let products = {};
    let orderedProducts = {};
    input.forEach(p => {
        let [name, ammount] = p.split(' => ');
        if(!products[name]){
            products[name] = 0;
        }
        products[name] += Number(ammount);

        if(products[name] >= 1000){
            orderedProducts[name] = 0;
        }
    });

    Object.keys(orderedProducts).forEach(n => {
        orderedProducts[n] = Math.floor(products[n] / 1000);
        console.log(`${n} => ${orderedProducts[n]}`);
    })
}

solve(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);