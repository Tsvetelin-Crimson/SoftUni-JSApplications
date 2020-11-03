function solve(array, sortingString){
    if (sortingString == 'asc') {
         return array.sort((first, second) => first - second);
    } else if (sortingString == 'desc') {
         return array.sort((first, second) => second - first);        
    }
}

solve([14, 7, 17, 6, 8], 'desc')