// Q10 – Delivery Pipeline Simulation

function randomStep(message) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;
        setTimeout(() => {
            Math.random() < 0.85 ? resolve(message) : reject(message + " failed!");
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        console.log("Step 1:", await randomStep("Order taken"));
        console.log("Step 2:", await randomStep("Food prepared"));
        console.log("Step 3:", await randomStep("Package ready"));
        console.log("Step 4:", await randomStep("Out for delivery"));

        console.log("Delivery completed!");
    } catch (err) {
        console.log("Pipeline failed!", err);
    }
}

runPipeline();
