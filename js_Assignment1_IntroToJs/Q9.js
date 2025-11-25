// Q9 Random Math Quiz Generator
let a=Math.floor(Math.random()*20)+1;
let b=Math.floor(Math.random()*20)+1;
let ops=['+','-','*','/'];
let op=ops[Math.floor(Math.random()*4)];
let ans;

switch(op){
 case '+': ans=a+b; break;
 case '-': ans=a-b; break;
 case '*': ans=a*b; break;
 case '/': ans=(a/b).toFixed(2); break;
}
console.log(`${a} ${op} ${b} = ${ans}`);