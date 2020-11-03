function solveClasses() {
    class Developer {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.baseSalary = 1000;
            this.tasks = [];
            this.experience = 0;
        }

        addTask(id, taskName, priority) {
            id = Number(id);
            let task = { id, taskName, priority }
            if (priority == 'high') {
                this.tasks.unshift(task)
            } else {
                this.tasks.push(task)
            }

            return `Task id ${id}, with ${priority} priority, has been added.`;
        }

        doTask() { // test
            if (this.tasks.length == 0) {
                return `${this.firstName}, you have finished all your tasks. You can rest now.`
            } else {
                return this.tasks.shift().taskName;
            }
        }

        getSalary() {
            return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`
        }

        reviewTasks() {
            let result = `Tasks, that need to be completed:`; // check if this is needed

            this.tasks.forEach(task => {
                result += `\n${task.id}: ${task.taskName} - ${task.priority}`
            })

            return result;
        }

    }

    class Junior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary += Number(bonus);
            this.experience = Number(experience);
        }
        learn(years) {
            this.experience += Number(years);
        }

    }

    class Senior extends Developer {
        constructor(firstName, lastName, bonus, experience) {
            super(firstName, lastName)
            this.baseSalary += Number(bonus);
            this.experience = Number(experience) + 5;
        }
        changeTaskPriority(taskId) {
            let task = this.tasks.find(task => task.id == taskId);
            this.tasks = this.tasks.filter(currTask => currTask.id != taskId)
            if (task.priority == 'high') {
                task.priority = 'low';
                this.tasks.push(task)
            } else {
                task.priority = 'high';
                this.tasks.unshift(task)
            }

            return task;
        }
    }
    return {
        Developer,
        Junior,
        Senior,
    }
}


let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());
console.log(developer.doTask());


// const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
// console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "high");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
