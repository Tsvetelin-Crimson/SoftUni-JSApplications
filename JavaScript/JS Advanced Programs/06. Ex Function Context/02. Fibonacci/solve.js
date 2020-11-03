function solve(){
    let numbOne = 0;
    let numbTwo = 1;
    function innerFunc(){
        let output = numbOne + numbTwo;
        numbOne = numbTwo;
        numbTwo = output;

        return numbOne;
    }
    return innerFunc
}

let fib = solve();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13