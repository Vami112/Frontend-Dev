
"use strict";
// Q9 – JSON Audit
// Parse raw JSON strings, handle errors, detect missing keys, convert age to Number and filter under-18 users.

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

console.log("=== Q9 JSON Audit ===");
for (let i = 0; i < rawData.length; i++) {
    const line = rawData[i];
    try {
        const parsed = JSON.parse(line);
        // Check for required keys: user and age
        if (!("user" in parsed) || !("age" in parsed)) {
            throw new Error("MissingKeys");
        }
        // Convert age to Number
        parsed.age = Number(parsed.age);
        if (Number.isNaN(parsed.age)) throw new Error("InvalidAge");
        clean.push(parsed);
        console.log(`Line ${i}: Parsed OK ->`, parsed);
    } catch (err) {
        errors.push({ line: i, text: line, message: err.message });
        console.log(`Line ${i} ERROR: ${err.message} | Text: ${line}`);
    }
}

console.log("\nValid entries (clean):", clean);
console.log("Error log:", errors);

// Bonus: filter under-18 users
const adults = clean.filter(u => u.age >= 18);
console.log("\nFiltered (age >= 18):", adults);
