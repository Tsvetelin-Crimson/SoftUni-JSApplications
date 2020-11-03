function solve(){
    let results = {};
    let specifics = [];
    [...arguments].forEach(e => {
        let type = typeof(e);
        specifics.push({type, value: e})
        if (!results[type]) {
            results[type] = 0;
        }
        results[type]++;
    });
    specifics.forEach(e => console.log(`${e.type}: ${e.value}`))
    
    let sortedResult = Object.entries(results).sort((first, second) => second[1] - first[1])
    sortedResult.forEach(e => console.log(`${e[0]} = ${e[1]}`))
}

solve('cat', 42, 52, function () { console.log('Hello world!'); });