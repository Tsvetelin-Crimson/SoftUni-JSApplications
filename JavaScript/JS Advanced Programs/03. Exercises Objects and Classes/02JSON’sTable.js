function solve(input) {
    let output = "<table>\n";
    let employees = [];
    input.forEach(e =>{
        employees.push(JSON.parse(e));
    })
    output += arrayToTable(employees);
    output += "</table>";
    console.log(output);
    function arrayToTable(employees){
        let result = '';
    
        employees.forEach(e =>{
            result += '\t<tr>\n';
                Object.values(e).forEach(i => {
                    result += `\t\t<td>${i}</td>\n`;
                });     
            result += '\t</tr>\r';
    
        });
        return result;
    }
}


solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])