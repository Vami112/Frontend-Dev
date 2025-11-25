// Q7 – Lazy Loader using Promise.allSettled()

function loadProfile() {
    return new Promise((resolve, reject) =>
        setTimeout(() => Math.random() < 0.8 ? resolve("Profile Loaded") : reject("Profile Failed"), 2000)
    );
}
function loadPosts() {
    return new Promise((resolve, reject) =>
        setTimeout(() => Math.random() < 0.8 ? resolve("Posts Loaded") : reject("Posts Failed"), 1500)
    );
}
function loadMessages() {
    return new Promise((resolve, reject) =>
        setTimeout(() => Math.random() < 0.8 ? resolve("Messages Loaded") : reject("Messages Failed"), 1000)
    );
}

const start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
    .then(results => {
        results.forEach(r => console.log(r.status, ":", r.value || r.reason));
        console.log("Total time:", (Date.now() - start), "ms");
    });
