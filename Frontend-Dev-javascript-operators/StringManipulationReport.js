// Q2: String Manipulation Report

let productName = " wireless headphones PRO ";

// Step 1: Trim spaces & convert to lowercase
let cleanedName = productName.trim().toLowerCase();

// Step 2: Capitalize first letter of each word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 3: Replace 'Pro' with 'Pro Edition'
cleanedName = cleanedName.replace("Pro", "Pro Edition");

// Display output
console.log("Cleaned Product Name:", cleanedName);
console.log("Length:", cleanedName.length);
