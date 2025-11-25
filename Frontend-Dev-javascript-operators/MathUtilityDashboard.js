// Q3: Math Utility Dashboard

let x = 16.75;

// Calculations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomValue = Math.floor(Math.random() * 41) + 10;

// Template summary
console.log(`
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
x^3: ${powerValue}
Random Number (10-50): ${randomValue}
`);
