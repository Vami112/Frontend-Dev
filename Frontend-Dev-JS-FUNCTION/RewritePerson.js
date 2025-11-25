class Person {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log("Name:", this.name);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // call parent constructor
        this.branch = branch;
    }
    showBranch() {
        console.log("Branch:", this.branch);
    }
}

const s2 = new Student("Riya", "ECE");
s2.showName();     // From Person
s2.showBranch();   // From Student

console.log(Object.getPrototypeOf(Student.prototype)); // → Person.prototype
