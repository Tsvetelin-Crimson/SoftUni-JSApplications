function solve(){
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = []
        }
        
        work(){
            let currTask = this.tasks.shift();
            console.log(`${this.name} ${currTask}`);
            this.tasks.push(currTask);
        }
        
        collectSalary(bonus = 0){
            console.log(`${this.name} received ${this.salary + bonus} this month.`)
        }
    }

    class Junior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks.push('is working on a simple task.')
        }
    }

    class Senior extends Employee {
        constructor(name, age){
            super(name, age);
            this.tasks.push('is working on a complicated task.')
            this.tasks.push('is taking time off work.')
            this.tasks.push('is supervising junior workers.')
        }
    }

    class Manager extends Employee {
        constructor(name, age){
            super(name, age);
            this.dividend = 0;
            this.tasks.push('scheduled a meeting.')
            this.tasks.push('is preparing a quarterly report.')
        }

        collectSalary(){
            super.collectSalary(this.dividend);
        }
    }

    return{ Employee, Junior, Senior, Manager}
}
let manager = new Manager('Alex', 23);
manager.salary = 1000;
console.log(manager.salary)
manager.divident = 100;
manager.collectSalary()
solve()