function solve(input) {
    let initialNumb = 0;
    let endArray = [];
    input.forEach(val => {
        initialNumb++;
        if (val === 'add') {
            endArray.push(initialNumb);
        } else if (val === 'remove') {
            endArray.pop();
        }
    })
    
    if (endArray.length == 0) {
        console.log('Empty');
    } else {
        endArray.forEach(v => console.log(v));
    }
}


solve(['remove', 
'remove', 
'remove']
);