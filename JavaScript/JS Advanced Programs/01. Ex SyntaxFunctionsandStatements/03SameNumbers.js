function solve(number) {

    let lastDigit = number % 10;
    let sum = 0;
    let isEqual = true;
    while (number / 10 != 0) {
        let digit = number % 10;

        if (digit !== lastDigit) {
            isEqual = false;
        }

        lastDigit = number % 10;
        sum += digit;
        number = Math.floor(number / 10);
    }

    console.log(isEqual);
    console.log(sum);
}
//keep this
//console.log(`${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`);

solve(222)