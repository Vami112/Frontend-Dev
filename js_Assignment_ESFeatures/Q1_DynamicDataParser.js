
"use strict";
// Q1 – Dynamic Data Parser
// Converts mixed API data to Number, Boolean, and String forms,
// collects valid numeric values and logs invalid numbers separately.
// All output visible via console.log().

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Helper: test if a string can be a valid number (no trailing non-numeric chars)
function isValidNumberValue(val) {
    // Number(null) === 0 and Number(undefined) === NaN -- treat null/undefined as invalid numeric input here
    if (val === null || val === undefined) return false;
    // Trim string conversion
    const s = String(val).trim();
    if (s.length === 0) return false;
    // Accept numeric forms like "25", "3.14", "-2", but reject "100px" or "12abc"
    // Use a strict regex to match optional sign, digits, optional fraction, optional exponent
    const numericRegex = /^[+-]?(?:\d+|\d+\.\d+|\.\d+)(?:[eE][+-]?\d+)?$/;
    return numericRegex.test(s);
}

const validNumbers = [];
const invalidNumbers = [];
const report = [];

for (let i = 0; i < apiData.length; i++) {
    const original = apiData[i];
    // Convert to String safely
    const asString = String(original);
    // Convert to Boolean using standard JS rules
    const asBoolean = Boolean(original);
    // Convert to Number using Number() to keep consistent
    const asNumber = Number(original);

    const entry = {
        index: i,
        original,
        asString,
        asBoolean,
        asNumber
    };

    // Check validity for numeric list
    if (isValidNumberValue(original)) {
        // store numeric value (Number)
        validNumbers.push(asNumber);
    } else {
        invalidNumbers.push({index: i, value: original});
    }

    report.push(entry);
}

// Print detailed report
console.log("=== Q1 Dynamic Data Parser Report ===");
for (const r of report) {
    console.log(`Index ${r.index}: original = ${JSON.stringify(r.original)} | String: "${r.asString}" | Boolean: ${r.asBoolean} | Number: ${r.asNumber}`);
}
console.log("\nValid numeric data array:", validNumbers);
console.log("Invalid/Skipped numeric entries (index & value):", invalidNumbers);
console.log("Notes: used a strict regex to identify numeric strings; null/undefined/empty-string/strings-with-units are considered invalid numeric inputs.");
