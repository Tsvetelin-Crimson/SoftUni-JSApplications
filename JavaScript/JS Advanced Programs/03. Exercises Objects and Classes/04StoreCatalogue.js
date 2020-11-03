function solve(input) {
    let output = {};
    input.forEach(line => {
        let [name, ammount] = line.split(' : ');
        let letter = name[0];
        if(!output[letter]){
            output[letter] = {};
        }
        output[letter][name] = Number(ammount);
    });
    Object.entries(output)
    .sort((curr, next) => curr[0].localeCompare(next[0]))
    .forEach(kvp => {
        console.log(kvp[0]);
        Object.entries(kvp[1])
        .sort((curr, next) => curr[0].localeCompare(next[0]))
        .forEach(naa => {
            console.log(` ${naa[0]}: ${naa[1]}`)
        });
    });
}

solve(['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
);