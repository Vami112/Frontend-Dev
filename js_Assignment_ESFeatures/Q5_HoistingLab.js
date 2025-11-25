
"use strict";
// Q5 – Hoisting Lab: The Sequence Trap
// Original snippet (predict): console.log(score); announce(); var score = 50; function announce(){...} let status = "ready"; startGame(); function startGame(){ console.log(status); }
// Explanation:
// - Function declarations are hoisted completely (announce, startGame available before definition)
// - var declarations are hoisted but initialized to undefined until assignment (score -> undefined)
// - let/const are hoisted but in TDZ (temporal dead zone) until initialization; accessing them before init throws ReferenceError

console.log("=== Q5 Hoisting Lab ===");
console.log("Demonstration of predicted behavior:");
try {
    // Simulate the problematic behavior in a controlled block
    // Note: commenting out direct problematic calls to avoid runtime crash while showing explanation
    console.log("If you run: console.log(score) BEFORE var score = 50 -> prints undefined");
    console.log("If you run: console.log(status) BEFORE let status = 'ready' -> throws ReferenceError because of TDZ");
} catch (e) {
    console.log("Caught:", e.message);
}

// Fixed version
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
function startGame() { console.log(status); }

console.log("\nFixed run output:");
console.log(typeof score !== 'undefined' ? score : 'undefined');
announce();
startGame();

// Arrow function rewrite to show hoisting differences
const announceArrow = () => { console.log("Game started (arrow)"); };
const startGameArrow = () => { console.log(status); };

console.log("\nArrow functions (note: arrow functions assigned to const are not hoisted like function declarations):");
announceArrow();
startGameArrow();

// Comments:
// - Function declarations are hoisted and callable before their textual appearance.
// - Function expressions / arrow functions assigned to const/let are not available before initialization.
