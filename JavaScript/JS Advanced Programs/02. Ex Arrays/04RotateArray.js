function solve(array) {
    let rotations = Number(array.pop());
        rotations = rotations % array.length;

    for (let i = 0; i < rotations; i++) {
        let temp = array.pop();
        array.unshift(temp);
    }
    console.log(array.join(' '));
}

solve(['1', '2', '3', '4', '2']);
solve(['Banana', 'Orange', 'Coconut', 'Apple', '15']);