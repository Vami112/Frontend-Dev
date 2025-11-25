// Q1: Scope Conflict Resolver
// Global variable
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Is Permanent: ${isPermanent}, Total Salary: ${salary}`);
}

// Test cases
calculateSalary(true);
calculateSalary(false);

// Showing global variable remains unchanged
console.log("Global Bonus Value:", bonus);
