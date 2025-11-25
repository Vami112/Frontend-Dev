// Q2 Multi-Type Data Summary
let str = "Hello";
let num = 42;
let bool = true;
let arr = [1,2,3];
let obj = {name:"Abhi"};
let n = null;
let u = undefined;

console.table([
  {label:"String", value:str, type:typeof str},
  {label:"Number", value:num, type:typeof num},
  {label:"Boolean", value:bool, type:typeof bool},
  {label:"Array", value:arr, type:Array.isArray(arr)},
  {label:"Object", value:obj, type:typeof obj},
  {label:"Null", value:n, type:typeof n},
  {label:"Undefined", value:u, type:typeof u}
]);