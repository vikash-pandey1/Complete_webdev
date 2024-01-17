// function hello(){
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo(){
//     console.log("calling hello fnx");
//     hello();
// }
// console.log("calling demo fnx");
// demo();
// console.log("done bye!");

// function one(){
//     return 1;
// }
// function two(){
//     return one() + one();
// }

// function three(){
//     let and = two() + one();
//     console.log(and);
// }

// three();

// js is single threaded 

let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a+b);

setTimeout(()=>{
    console.log("set time out");
},4000);
console.log("welcome");

