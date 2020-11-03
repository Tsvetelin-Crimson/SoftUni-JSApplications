function solve(input) {
    let output = {};
    input.forEach(line => {
        let [system, component, subcomponent] = line.split(' | ');

        if(!output[system]){
            output[system] = {};
        }

        if (!output[system][component]) {
            output[system][component] = [];
        }
        output[system][component].push(subcomponent) ;
    });
    Object.entries(output)
    .sort((curr, next) => Object.entries(next[1]).length - Object.entries(curr[1]).length || curr[0].localeCompare(next[0]))
    .forEach(systemsAndComponents => {
        console.log(systemsAndComponents[0]);
        Object.entries(systemsAndComponents[1])
        .sort((curr, next) => next[1].length - curr[1].length)
        .forEach(componentsAndSubComponents => {
            console.log(`|||${componentsAndSubComponents[0]}`);
            componentsAndSubComponents[1]
            .forEach(subcomponent => console.log(`||||||${subcomponent}`));
        });
    });
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);