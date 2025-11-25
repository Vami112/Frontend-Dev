// Q8 Employee Salary Projection
let salary=30000;
let rate=10;
let list=[];

for(let i=1;i<=5;i++){
    salary += salary*(rate/100);
    list.push({Year:i, Salary:Math.round(salary)});
}
console.table(list);