
// print function
// function print(){
//     console.log("apna college");
//     console.log("vikash pandey");
// }
// print();

// no print 
// function print1to5(){
//     for(let i=0;i<=5;i++){
//         console.log(i);
//     }
// }
// print1to5();

// check age function
// function isAdult(){
//     let age = 43;
//     if(age>=18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }
// isAdult();

// crate a funciton that prints a poem

// function poem(){
//     console.log(`twinkle twinkle little star 
//     how I wonder what you are
//     up above the world so high 
//     like a diamond in the sky`);
// }
// poem();

// write a function to generate a random no from 1 to 6
// function dice(){
//     console.log(Math.floor(Math.random()*6 )+1);
// }
// dice();

// function with arguments 


// adding function
// function add(a,b){
//     console.log(a+b);
// }
// add(4,3);

// functon with personInfo
// function printInfo(name,age){
//     console.log(`${name}'s age is ${age} `);
// }
// printInfo('vikash',22);
// printInfo('bk',21);

// function with average of three no
// function avg(a,b,c){
//     console.log(`average of no is ${(a+b+c)/3}`);
// }
// avg(43,343,23);

// function prints the multiplication table of a number

// function table(a){
//     for(let i=1;i<=10;i++){
//         console.log(a*i);
//     }
// }
// table(5); 

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(sum(2,3),5));

// create a function that returns the sum of numbers from 1 to 10
// function number(n){
//     let  sum =0;
//     while(n>=0){
//         sum+=n;
//         n--;
//     }
//     return sum;
// }
// console.log(number(5));

// create a function that return the concatenation of all strings in an array
// let str = ['ram','shyam','sita'];
// function concat(str){
//     let result = "";
//     for(let i=0;i<str.length;i++){
//         result +=str[i];
//     }
//     return result;
// }
// console.log(concat(str));

// scope of the variable

// function sum(a,b){
//     let add = (a+b);// function scope
//     console.log(add);
// }

// {
//     let ram =32;//block scope
//     console.log(ram);
// }

//lexical scope
// function outerFun(){
//     let a = 434;
//     let b = 436;
//     function innterFun(){
//         console.log("welcome to inner function");
//         console.log(a);
//         console.log(b);
//     }
//     innterFun();
// }


// ques to solve
// let greet = "hello";
// function changeGreet(){
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet(){
//         console.log(greet);
//     }
// }
// console.log(greet);
// changeGreet();

// higher order function

// function multiple(func,count){
//     for(let i=1;i<=count;i++){
//         func();
//     }
// }
// function greet(){
//     console.log('namaste');
// }
// multiple(greet,5);

// function factory

// function evenoddText(request){
//     if(request=='odd'){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }else if(request=='even'){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }else{
//         console.log("wrong input")
//     }
// }
// let a = evenoddText('odd');
// a(3);
// a(4);

const  calculator = {
    add:function(a,b){
        return a+b
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
};
console.log(calculator.add(3,23));