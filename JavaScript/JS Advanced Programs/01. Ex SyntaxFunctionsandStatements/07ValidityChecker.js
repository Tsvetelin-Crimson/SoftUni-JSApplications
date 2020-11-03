function solve(input){
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());

    let x1y1Validity = GetValidity(x1, y1, 0, 0);
    let x2y2Validity = GetValidity(x2, y2, 0, 0);
    let x1y1x2y2Validity = GetValidity(x1, y1, x2, y2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${x1y1Validity ? 'valid' : 'invalid'}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${x2y2Validity ? 'valid' : 'invalid'}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${x1y1x2y2Validity ? 'valid' : 'invalid'}`);


    function GetValidity(x1, y1, x2 ,y2){
        let distanceBetween = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return Number.isInteger(distanceBetween);
    }
}

solve([3, 0, 0, 4]);