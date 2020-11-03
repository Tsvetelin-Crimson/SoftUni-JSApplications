function sort(input) {
    input.sort((first, second) => first.length - second.length || first.localeCompare(second))
    .forEach(e => console.log(e));
}

sort(['test', 
'Deny', 
'omen', 
'Default']);