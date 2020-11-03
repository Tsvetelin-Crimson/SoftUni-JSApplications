class Company{
    constructor(){
        this.departments = [];
    }

    addEmployee(username, salary, position, department){

        if (username && position && department && salary > 0 ) {           
            if (!this.departments[department]) {
                this.departments[department] = [];
            }

            this.departments[department].push({username, salary, position});
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        } else {
            throw new Error('Invalid input!')
        }
    }
    bestDepartment(){
        let departemnts = {}
        Object.entries(this.departments).forEach(([department, employees]) =>{
            let totalSalary = employees.map(e => e.salary).reduce((acc, cur) => acc += cur)

            departemnts[department] = totalSalary / employees.length;
        })
        let bestSalary = 0;
        let bestDepartment;        
        Object.entries(departemnts).forEach(([department, avrSalary]) => {
            if (avrSalary > bestSalary) {
                bestSalary = avrSalary;
                bestDepartment = department;
            }
        })

        let output = `Best Department is: ${bestDepartment}\nAverage salary: ${bestSalary.toFixed(2)}\n`

        this.departments[bestDepartment]
        .sort((curr, next) => next.salary - curr.salary || curr.username.localeCompare(next.username))
        .forEach(employee => {
            output += `${employee.username} ${employee.salary} ${employee.position}\n`
        });
        return output.trim();
    }
}


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());