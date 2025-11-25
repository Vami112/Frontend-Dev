// Q8: Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let totalAmount = 0;

// Category-wise discount
cart.forEach(product => {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } 
    else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    let discountedPrice = product.price - (product.price * discountRate);
    totalAmount += discountedPrice;
});

// Additional discount if total > 50000
if (totalAmount > 50000) {
    totalAmount -= totalAmount * 0.05;
}

console.log("Final Cart Amount:", totalAmount.toFixed(2));
