// Q4 – Deployment Servers Race

const serverA = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() < 0.8 ? resolve("Server A done") : reject("Server A failed");
    }, 2000);
});

const serverB = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() < 0.8 ? resolve("Server B done") : reject("Server B failed");
    }, 3000);
});

Promise.all([serverA, serverB])
    .then(() => console.log("Deployment completed for all servers"))
    .catch(err => console.log("Deployment Error:", err));

Promise.race([serverA, serverB])
    .then(msg => console.log("Fastest response:", msg))
    .catch(err => console.log("Fastest failed:", err));
