class Stringer {
    innerString = '';
    innerLength = 0;

    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
    }

    increase(length){
        this.innerLength += length;       
    }
    decrease(length){
        if (this.innerLength - length < 0) {
            this.innerLength = 0
        } else {
            this.innerLength -= length;
        }
    }
    toString(){
        
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else {
            let returnString = '';
            for (let i = 0; i < this.innerLength; i++) {
                returnString += this.innerString[i];                
            }
            return returnString + '...';
        }
    }
}
function solve(){
    let test = new Stringer('Test', 5);
console.log(test.toString()); // Test
test.decrease(3);
console.log(test.toString()); // Te...
test.decrease(5);
console.log(test.toString()); // ...
test.increase(4);
console.log(test.toString()); // Test
}
solve()