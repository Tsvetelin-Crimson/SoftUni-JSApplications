function solve(input) {
    let sum = input.reduce((acc, curr) => {
        curr.forEach(k => acc += k)
        return acc;
    }, 0);
    let firstSum = input[0].reduce((acc, curr) => acc += curr);
    console.log(firstSum === (sum / input.length));
}

solve([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);
solve([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);
solve([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]])