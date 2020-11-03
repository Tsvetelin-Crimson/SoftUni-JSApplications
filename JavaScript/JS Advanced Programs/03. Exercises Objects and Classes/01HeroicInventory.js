function solve(input) {
    let output = [];
    input.forEach(h => {
        let [name, level, items] = h.split(' / ');
        level = Number(level);      
        items = items ? items.split(', ') : [];                    

        let hero = {name, level, items};
        // hero['name'] = heroName;
        // hero['level'] = Number(heroLevel);        
        // hero['items'] = heroItems.split(', ');                  
        output.push(hero);
    });

    let json = JSON.stringify(output);
    console.log(json);
    //return json;
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);