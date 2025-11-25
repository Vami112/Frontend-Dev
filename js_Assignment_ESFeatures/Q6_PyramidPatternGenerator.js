
"use strict";
// Q6 – Pyramid Pattern Generator
// Generates a star pyramid, demonstrates var vs let effects, and accepts optional user input for height.
//
// Usage (Node): node Q6_PyramidPatternGenerator.js [height]
// Default height = 5

const args = process.argv.slice(2);
const userLimit = args[0] ? Number(args[0]) : 5;
const limit = Number.isInteger(userLimit) && userLimit > 0 ? userLimit : 5;

console.log("=== Q6 Pyramid Pattern Generator ===");
console.log(`Generating pyramid with limit = ${limit}`);

// Using let in loops (recommended)
for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}

console.log("\nNow replacing let with var and observing scoping behavior (should produce same pyramid but var leaks indices outside loop):");

for (var a = 1; a <= 4; a++) {
    var row2 = "";
    for (var b = 0; b < a; b++) {
        row2 += "* ";
    }
    console.log(row2.trim());
}
// Note: Using 'var' leaks a and b to the function/global scope; using 'let' keeps them block-scoped.
// To debug step-by-step, set breakpoints on the loops in VS Code and watch variables a/b or i/j.
