function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();   // executing the callback
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

// Demonstration
greetUser("Aman", showEndMessage);
