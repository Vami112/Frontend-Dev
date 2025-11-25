// Q7: Customer Feedback Processor

let feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words
let wordCount = feedback.split(" ").length;

// Check for negative keywords
let hasNegative = feedback.toLowerCase().includes("bad") || 
                  feedback.toLowerCase().includes("poor");

console.log("Word Count:", wordCount);

// Evaluate sentiment
if (!hasNegative) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
