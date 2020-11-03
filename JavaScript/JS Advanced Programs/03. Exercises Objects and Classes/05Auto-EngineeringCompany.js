function solve(input) {
    let output = {};
    input.forEach(line => {
        let [brand, model, ammount] = line.split(' | ');

        if(!output[brand]){
            output[brand] = {};
        }
        if (!output[brand][model]) {
            output[brand][model] = 0;
        }
        output[brand][model] += Number(ammount);
    });
    console.log();
    Object.entries(output)
    .forEach(brandAndModels => {
        console.log(brandAndModels[0]);
        Object.entries(brandAndModels[1])
        .forEach(modelAndProduced => {
            console.log(`###${modelAndProduced[0]} -> ${modelAndProduced[1]}`)
        });
    });
}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);