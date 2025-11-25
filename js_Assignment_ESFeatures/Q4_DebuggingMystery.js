
"use strict";
// Q4 – Debugging Mystery
// Original code under strict mode would throw because 'greeting' is assigned without declaration.
// In strict mode, creating a global by assignment to undeclared identifier is forbidden.

function showMessage_wrong() {
    // greeting = "Welcome"; // <- would throw ReferenceError: greeting is not defined in strict mode
    // console.log(greeting);
}

function showMessage_fixed() {
    // Fix: declare variable properly (let/var/const) so strict mode is satisfied.
    let greeting = "Welcome";
    console.log(greeting);
}

console.log("=== Q4 Debugging Mystery ===");
console.log("Attempting fixed function:");
showMessage_fixed();

// Explanation (also printed):
console.log("\nExplanation:");
console.log("Under 'use strict', assigning to an undeclared variable throws a ReferenceError because implicit global creation is disallowed.");
console.log("Fix: declare variables explicitly (var / let / const). In modern code prefer let/const.");
// For debugging: set a watch on 'greeting' in VS Code while paused inside showMessage_fixed and observe call stack.
