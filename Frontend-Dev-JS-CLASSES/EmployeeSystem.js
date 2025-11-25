// EmployeeSystem.js
class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary; // monthly or monthly? we'll treat as monthly
  }

  // annual salary (12 * monthlySalary)
  getAnnualSalary() {
    return +(this.salary * 12).toFixed(2);
  }

  // apply bonus percent to salary (affects monthly salary)
  applyBonus(percent) {
    if (typeof percent !== 'number' || percent < 0) return;
    this.salary = +(this.salary * (1 + percent / 100)).toFixed(2);
  }
}

// create 5 employees
const employees = [
  new Employee(1, 'Asha', 'HR', 40000),
  new Employee(2, 'Rohan', 'CSE', 55000),
  new Employee(3, 'Maya', 'Design', 35000),
  new Employee(4, 'Vikram', 'Sales', 30000),
  new Employee(5, 'Sonia', 'Finance', 45000)
];

// apply a 5% bonus to everyone as example
employees.forEach(e => e.applyBonus(5));

// show annual salary for each
employees.forEach(e => {
  console.log(`${e.name} (${e.department}) - Annual: ₹${e.getAnnualSalary()}`);
});

// reduce to get total annual payout
const totalAnnualPayout = employees.reduce((acc, e) => acc + e.getAnnualSalary(), 0);
console.log('Total annual payout: ₹' + totalAnnualPayout.toFixed(2));
