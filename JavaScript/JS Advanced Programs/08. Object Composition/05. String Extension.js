(() => {
    String.prototype.ensureStart = function(str){
        if (!this.startsWith(str)){
            return str + this.toString();
        }
        return this.toString(); 
    }

    String.prototype.ensureEnd = function(str){
        if (!this.endsWith(str)){
            return this.toString() + str;
        }
        return this.toString(); 
    }

    String.prototype.isEmpty = function(){
        return this.length == 0;
    }

    String.prototype.truncate = function(n){
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length <= n) {
            return this.toString();
        }
        if (space < 0) {
            return string.substring(0, n - 3) + '...';
        }
        let space = this.lastIndexOf(' ');
        let string = this.toString();

        while (string.length > n) {
            string = string.substring(0, space) + '...';
            space = string.lastIndexOf(' ');
        }
        return string.toString();
    }

    String.format = function (string, ...params) {
        params.forEach((curr, index) => {
            string = string.replace(`{${index}}`, curr);
        });
        return string;
    }
})();


// let str = 'my string asdaqdawd adawdawd awdawd';
// str = str.truncate(12);
// console.log(str);

//let str = 'my string';
let str = '';
console.log(str.isEmpty());
// str = str.ensureStart('my');
// console.log(str);
// str = str.ensureStart('hello ');
// console.log(str);
// str = str.truncate(16);
// console.log(str);
// str = str.truncate(14);
// console.log(str);
// str = str.truncate(8);
// console.log(str);
// str = str.truncate(4);
// console.log(str);
// str = str.truncate(2);
// console.log(str);
// str = String.format('The {0} {1} fox',
//   'quick', 'brown');
// console.log(str);

// str = String.format('jumps {0} {1}',
//   'dog');
// console.log(str);
