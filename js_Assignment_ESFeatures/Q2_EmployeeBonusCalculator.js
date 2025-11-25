
"use strict";
// Q2 – Employee Bonus Calculator
// - Converts salary and years to Number
// - Calculates bonus based on years > 3 -> 10% else 5%
// - Uses strict mode (no implicit globals), template strings, and try...catch
const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

function computeBonus(emp) {
    try {
        if (!emp || typeof emp !== "object") throw new Error("Employee record is missing or invalid");
        if (!("name" in emp)) throw new Error("Missing property: name");
        if (!("salary" in emp)) throw new Error("Missing property: salary");
        if (!("years" in emp)) throw new Error("Missing property: years");

        const salary = Number(emp.salary);
        const years = Number(emp.years);

        if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error("Invalid number conversion for salary or years");

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const total = salary + bonus;

        console.log(`Employee: ${emp.name} | Salary: ${salary} | Years: ${years} | Bonus: ${bonus.toFixed(2)} | Total: ${total.toFixed(2)}`);
        return { name: emp.name, salary, years, bonus, total };
    } catch (err) {
        // Print debug observations and rethrow if needed
        console.log(`Error computing bonus for entry ${JSON.stringify(emp)} -> ${err.message}`);
        return null;
    }
}

console.log("=== Q2 Employee Bonus Calculator ===");
const results = employees.map(computeBonus);
console.log("Computed results:", results);
