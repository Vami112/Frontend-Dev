class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    return this.marks.reduce((sum, m) => sum + m, 0) / this.marks.length;
  }

  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }
}

const s1 = new Student("Rahul", [90, 92, 88]);
const s2 = new Student("Priya", [70, 75, 72]);
const s3 = new Student("Aman", [35, 40, 45]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
