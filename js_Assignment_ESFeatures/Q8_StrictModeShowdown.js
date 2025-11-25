
// Q8 – Strict Mode Showdown
// Demonstrates behavior with and without 'use strict'.
// We will show examples and a correct ES6 version.

console.log("=== Q8 Strict Mode Showdown ===");

(function withoutStrict() {
    // No 'use strict' in this IIFE
    function demo(a, a_duplicate) {
        // Non-strict allows duplicate parameter names and silent creation of globals
        total = 10; // creates global 'total' in non-strict mode
        try { delete total; } catch (e) { /* may fail silently */ }
        console.log("Non-strict demo ran, total (global) =", globalThis.total || globalThis.total === 0 ? globalThis.total : "(not set)");
    }
    demo(5, 10);
    // Clean up if created
    try { delete globalThis.total; } catch (e) {}
})();

(function withStrict() {
    "use strict";
    try {
        function demo(a, a) {
            // SyntaxError in strict mode: duplicate parameter names are not allowed
            // Also deleting undeclared variables or deleting variables is not allowed
        }
    } catch (e) {
        console.log("In strict mode the duplicate-parameter declaration would throw:", e.message);
    }
    try {
        // Demonstrate illegal operations in strict mode
        (function () {
            "use strict";
            // Assigning to an undeclared variable throws ReferenceError
            try { undeclaredVar = 5; } catch (err) { console.log("Strict-mode error (undeclared assignment):", err.message); }
            // Deleting a variable or function is a SyntaxError in strict mode
            try {
                var t = 1;
                // delete t; // SyntaxError if uncommented in strict mode
            } catch (e) { console.log(e.message); }
        })();
    } catch (e) {
        console.log("Strict-mode demonstration error:", e.message);
    }
})();

console.log("\nCorrect ES6 version (no duplicate params, no implicit globals):");
(function correctVersion(a, b) {
    "use strict";
    let total = 10; // declared variable
    console.log("Correct version total:", total);
})(5, 10);
