// Q5 – Build pipeline: design → build → test → deploy → celebrate

// Helpers
const wait = (msg) =>
    new Promise(res => setTimeout(() => res(msg), 1000));

// ------------------------
// (A) Callback Hell version
// ------------------------

function design(cb) {
    setTimeout(() => { console.log("Design complete"); cb(); }, 1000);
}
function build(cb) {
    setTimeout(() => { console.log("Build complete"); cb(); }, 1000);
}
function test(cb) {
    setTimeout(() => { console.log("Testing complete"); cb(); }, 1000);
}
function deploy(cb) {
    setTimeout(() => { console.log("Deployment complete"); cb(); }, 1000);
}
function celebrate(cb) {
    setTimeout(() => { console.log("Celebration!"); cb(); }, 1000);
}

design(() =>
    build(() =>
        test(() =>
            deploy(() =>
                celebrate(() => console.log("Pipeline done!"))
            )
        )
    )
);

// --------------------------------
// (B) async/await (Clean version)
// --------------------------------

async function runPipeline() {
    console.log("\nAsync/Await Version:");
    console.log(await wait("Design complete"));
    console.log(await wait("Build complete"));
    console.log(await wait("Testing complete"));
    console.log(await wait("Deployment complete"));
    console.log(await wait("Celebration!"));
}

// async/await = cleaner, readable, avoids pyramid of doom
runPipeline();
