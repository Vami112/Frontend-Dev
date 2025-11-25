
"use strict";
// Q7 – Smart Calculator
// Supports operations: add, divide, power, root, subtract
// Custom errors for divide by zero, root of negative, and invalid operation.
// All output via console.log()

class InvalidOperationError extends Error {
    constructor(op) {
        super(`Invalid operation: ${op}`);
        this.name = "InvalidOperationError";
        this.operation = op;
    }
}

function calculate(operation, x, y) {
    switch (operation) {
        case "add": return x + y;
        case "subtract": return x - y;
        case "divide":
            if (y === 0) throw new Error("DivideByZero");
            return x / y;
        case "power": return Math.pow(x, y);
        case "root":
            if (x < 0) throw new Error("NegativeRoot");
            return Math.pow(x, 1 / y);
        default:
            throw new InvalidOperationError(operation);
    }
}

console.log("=== Q7 Smart Calculator ===");
const operations = ["add", "divide", "power", "root", "subtract", "unknown"];
const num1 = 25, num2 = 0;

for (const op of operations) {
    try {
        const result = calculate(op, num1, num2);
        console.log(`Operation: ${op} | ${num1} and ${num2} => Result: ${result}`);
    } catch (err) {
        console.log(`Operation: ${op} failed -> ${err.name || "Error"}: ${err.message}`);
    }
}

console.log("\nSummary: handled divide-by-zero and invalid operations with custom errors.");
