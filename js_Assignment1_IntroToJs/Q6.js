// Q6 Progressive Discount System
let total=6500;
let d=0;

if(total>=10000) d=25;
else if(total>=5000) d=15;
else if(total>=2000) d=5;

let final= total - (total*d/100);
console.log("Original:", total);
console.log("Discount %:", d);
console.log("Final:", Math.round(final));