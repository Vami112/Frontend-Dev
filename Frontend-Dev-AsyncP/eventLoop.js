// Q2 – Task Scheduler: Micro vs Macro
// Microtasks (Promise.then) run BEFORE macrotasks (setTimeout)

console.log("Start");

setTimeout(() => console.log("Timeout callback (Macrotask)"), 0);

Promise.resolve().then(() =>
    console.log("Promise callback (Microtask)")
);

console.log("Synchronous log");

console.log("End");

// Explanation:
// JS executes synchronous code first.
// Then microtasks (Promise.then), then macrotasks (setTimeout)
