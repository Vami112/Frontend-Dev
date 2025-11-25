// Q1 – Startup Morning: Async Coffee Maker
// Each step returns a Promise, resolves in 1–2s, fails randomly using Math.random()

function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Water boiled") : reject("Boiler malfunction!");
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Coffee brewed") : reject("Coffee machine error!");
        }, 1200);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Coffee poured into cup") : reject("Spilled the coffee!");
        }, 1500);
    });
}

boilWater()
    .then(msg => {
        console.log(msg);
        return brewCoffee();
    })
    .then(msg => {
        console.log(msg);
        return pourCoffee();
    })
    .then(msg => {
        console.log(msg);
        console.log("Coffee ready for the team!");
    })
    .catch(err => console.log("Process failed:", err));
