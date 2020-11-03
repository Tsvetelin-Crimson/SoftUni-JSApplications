function extract(array){
    let biggest = Number.MIN_SAFE_INTEGER;
    array.filter(v => {
        if (v >= biggest) {
            biggest = v;        
            return true;
        }
        return false;
    }).forEach(e => console.log(e));
}
extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extract([20, 3, 2, 15, 6, 1])