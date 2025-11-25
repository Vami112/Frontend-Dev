// Q4: Array Performance Analyzer

// Generate 8 random scores (30–100)
let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

// Calculations
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);
let averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;
let passedCount = scores.filter(score => score >= 50).length;

console.log("Scores:", scores);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Students Passed:", passedCount);
