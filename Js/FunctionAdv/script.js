// this keyword
// const obj = {
//     name:'vikash',
//     age:22,
//     city:'baldeo',
//     eng:90,
//     math:94,
//     hindi:80,
//     cs:98,
//     getAvg(){
//         console.log(this);
//         let avg = (this.eng+this.math+this.cs)/3
//         console.log(`${this.name} got average ${avg} marks`);
//     }
// }

// try and catch function
// console.log('ram');
// try{
//     console.log(a);
// }
// catch(err){
//     console.log(err);
// }
// console.log('shyam');
// console.log('hari');

//Arrow function

// const sum = (a, b) => {
//     console.log(a + b);
// };

// const queue = (n) => {
//     return n * n * n;
// };
// const pow = (a, b) => {
//     return a ** b;
// };

// const mul = (a, b) => a*b

// set Timeout function
// console.log('welcome to timeout function');
// setTimeout(()=>{
//     console.log("i am print after 5 second");
// },5000);

// set Interval function

//  let id = setInterval(()=>{
//     console.log(id);
//     console.log("i wil print repeatively");
// },3000);

// this with arrow function

// const student = {
//     name:'aman',
//     marks:95,
//     prop:this,
//     getName:function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:()=>{
//         console.log(this);
//         return this.marks;
//     },
//     getInfo1:function(){
//         setInterval(()=>{
//             console.log(this);//student
//         },2000);
//     },
//     getInfo2:()=>{
//         setInterval(()=>{
//             console.log(this);//window
//         },2000);
//     },
// };

// write an arrow function that returns the square of a number 'n'
const square = (n)=>{
    return n**2;
};

// write a function that prints "hello world " 5 times at intervals of 2s each

let id = setInterval(()=>{
    console.log('Hello World');
},2000);
setTimeout(()=>{
    clearInterval(id);
    console.log("cleare interval run");
},10000);