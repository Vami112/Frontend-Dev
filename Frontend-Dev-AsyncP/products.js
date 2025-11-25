// Q6 – Fetch Product Data using Fake Store API

async function loadProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Network error");

        const products = await res.json();

        products.forEach(p => {
            console.log(`Product: ${p.title}`);
            console.log(`Price: $${p.price}`);
            console.log(`Image: ${p.image}\n`);
        });

    } catch (err) {
        console.log("Failed to load products. Please try again.");
    }
}

loadProducts();
