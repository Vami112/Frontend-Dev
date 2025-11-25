// Q8 – Retry order submission

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.5 ? resolve("Order Success") : reject("Order Failed");
        }, 500);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const res = await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return;
        } catch {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

processOrder()
    .catch(err => console.log(err.message));
