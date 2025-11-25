// Q3 – Bug Tracker Modernization

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const failed = Math.random() < 0.3;
            if (failed) reject("API failed to fetch bugs");
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bugs Retrieved:");
        console.table(bugs);
    })
    .catch(err => console.log("Error:", err));
