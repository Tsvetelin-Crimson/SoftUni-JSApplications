function solve(input){
    let object = { };
    let inputLentgth = input.length / 2;
    for (let i = 0; i < inputLentgth; i++) {
    let propName = input.shift();
    let propvalue = Number(input.shift());
    object[propName] = propvalue;        
    }

    console.log(object);
}

//solve(['asd', 12]);
//solve(['Yoghurt', '48','Rise', '138','Apple', 52]);
solve(['Potato', '93','Skyr', '63','Cucumber', 18,'Milk', 42]);
