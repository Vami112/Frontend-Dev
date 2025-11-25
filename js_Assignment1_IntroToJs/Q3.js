// Q3 Monthly Expense Tracker
let expenses = [2000, 1500, 8000, 1200, 1000];
let total = expenses.reduce((a,b)=>a+b,0);
let avg = total/expenses.length;
let final = total * 1.10;

console.log("Total:", total.toFixed(2));
console.log("Average:", avg.toFixed(2));
console.log("Final after tax:", final.toFixed(2));