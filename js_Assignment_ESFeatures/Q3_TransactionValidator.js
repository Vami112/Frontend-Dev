
"use strict";
// Q3 – Transaction Validator
// Validate transactions, throw custom errors for negative amount, missing fields, or null entry.
// Categorize each transaction into valid or invalid arrays.

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

class TransactionError extends Error {
    constructor(type, message, record) {
        super(message);
        this.name = "TransactionError";
        this.type = type;
        this.record = record;
    }
}

const valid = [];
const invalid = [];

console.log("=== Q3 Transaction Validator ===");
for (let i = 0; i < transactions.length; i++) {
    const tx = transactions[i];
    try {
        if (tx === null) throw new TransactionError("NullEntry", "Transaction is null", { index: i });
        if (typeof tx !== "object") throw new TransactionError("InvalidType", "Transaction not an object", { index: i });
        if (!("id" in tx)) throw new TransactionError("MissingField", "Missing id", { index: i, record: tx });
        if (!("amount" in tx)) throw new TransactionError("MissingField", "Missing amount", { index: i, id: tx.id });
        if (typeof tx.amount !== "number" || Number.isNaN(tx.amount)) throw new TransactionError("InvalidAmount", "Amount is not a valid number", { index: i, id: tx.id, amount: tx.amount });
        if (tx.amount < 0) throw new TransactionError("NegativeAmount", "Amount is negative", { index: i, id: tx.id, amount: tx.amount });

        // If no error, push to valid
        valid.push(tx);
        console.log(`Transaction ${tx.id} processed successfully.`);
    } catch (err) {
        if (err instanceof TransactionError) {
            invalid.push({ index: i, type: err.type, message: err.message, record: err.record || tx });
            console.log(`Transaction at index ${i} failed: [${err.type}] ${err.message}`);
        } else {
            invalid.push({ index: i, type: "UnknownError", message: err.message, record: tx });
            console.log(`Transaction at index ${i} failed: ${err.message}`);
        }
    }
}

// Final report
console.log("\nFinal Report:");
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}, Failed: ${invalid.length}`);

// Note: To use a breakpoint to watch variables, run this file in a debugger (VS Code) and set a breakpoint inside the loop.
