
"use strict";
// Q10 – Nested Hoisting and Closures
// Original code:
// function outer() {
//   console.log(count);
//   var count = 5;
//   function inner() {
//     console.log(count);
//     var count = 10;
//   }
//   inner();
// }
// outer();
//
// Prediction & explanation:
// - outer's var count is hoisted and initialized to undefined at function start, so first console.log(count) prints undefined.
// - inner has its own var count hoisted to undefined inside inner, so console.log(count) inside inner prints undefined as well, then assignment sets to 10.
// - Therefore output: undefined, undefined
//
// We'll demonstrate and then convert inner to an arrow function.

function outer() {
    console.log("outer initial count ->", typeof count === "undefined" ? undefined : count);
    var count = 5;
    function inner() {
        console.log("inner initial count ->", typeof count === "undefined" ? undefined : count);
        var count = 10;
        console.log("inner after set count ->", count);
    }
    inner();
    console.log("outer after inner, outer count ->", count);
}

console.log("=== Q10 Nested Hoisting and Closures ===");
outer();

console.log("\nArrow inner function variant (note arrow doesn't create its own 'this' but var hoisting rules still apply):");
function outerWithArrow() {
    console.log("outerWithArrow initial count ->", typeof count === "undefined" ? undefined : count);
    var count = 5;
    const innerArrow = () => {
        // var inside arrow still hoisted at function scope of arrow; but arrow's surrounding scope is outerWithArrow,
        // if we use 'var count' inside arrow it is hoisted to arrow's scope (same behavior as function expression)
        console.log("innerArrow initial count ->", typeof count === "undefined" ? undefined : count);
        var count = 10;
        console.log("innerArrow after set count ->", count);
    };
    innerArrow();
    console.log("outerWithArrow after inner, outer count ->", count);
}
outerWithArrow();

// To debug: set breakpoints at each console.log and inspect scopes & call stack in the debugger.
