// Q9 – Predict execution order

/* Predicted Output:
1. Script start
2. Script end
3. Promise callback
4. Timeout callback
*/

console.log("Script start");

setTimeout(() => console.log("Timeout callback"), 0);

Promise.resolve().then(() => console.log("Promise callback"));

console.log("Script end");

// Promise.then = microtask → runs before setTimeout = macrotask
