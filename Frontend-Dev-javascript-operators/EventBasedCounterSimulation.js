// Q6: Event-Based Counter Simulation

let count = 0;

// Function to increase count
function increment() {
    count++;
    console.log("Count:", count);
}

// Function to decrease count
function decrement() {
    count--;
    console.log("Count:", count);
}

// Nested function demonstration
function simulateClicks() {
    function nestedUpdate() {
        count += 2;
        console.log("Nested Update:", count);
    }

    increment();
    increment();
    decrement();
    nestedUpdate();
}

// Simulate event clicks
simulateClicks();
