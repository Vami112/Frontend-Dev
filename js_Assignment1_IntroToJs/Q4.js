// Q4 Academic Performance Evaluator
let marks=[90,85,89,92,88];
let failed = marks.some(m=>m<35);
let avg = marks.reduce((a,b)=>a+b,0)/marks.length;
let percent = avg;

if(failed) console.log("Detained");
else if(percent>=85) console.log("Promoted with Distinction");
else if(percent>=50) console.log("Promoted");
else console.log("Detained");