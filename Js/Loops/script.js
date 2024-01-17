// for(let i=0;i<10;i++){
//     console.log(i);
// }

// for(let  i =10;i>=0;i--){
//     console.log(i);
// }

// even no 1 to 1 

// for(let i =0;i<10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// odd no 1 to 10
// for(let i =0;i<10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// print odd no from 1 to 15

// for(let i=0;i<=15;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// print even no from 1 to 15

// for(let i=0;i<=15;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// infinite loop

// let i =0;
// for(;;){
//     console.log(i++);
// }

// table of 5
// let n = prompt("Enter the no that you want to print")
// for(let i=1;i<=10;i++){
//     console.log(i*n);
// }

//nested loop

// for(let i=0;i<5;i++){
//     for(let j =0;j<5;j++){
//         console.log(j);
//     }
// }

// while

// let i =5;
// while(i>=0){
//     console.log(i);
//     i--;
// }

// movie guess game

// const fav = "avatar";
// let guess = prompt("Guess your favorite movie");
// while(guess != fav){
//     if(guess=='quit'){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt("wrong guess. Please try again");

// }
// if(guess == fav){
//     console.log("congrats!");
// }else{
//     console.log("you quit");
// }

// break keywork

// let i=1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

//loops with Arrays

// let fruits = ['mango','apple','banana','litchi','m'];
// for(let i =0;i<fruits.length;i++){
//     console.log(fruits[i]) 
// }

//nested loops with 2d Arrays

// let heroes = [['ironman','spidarman','thor'],['superman','wondor woman','flash']];
// for(let i=0;i<heroes.length;i++){
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

// for of loop

// let fruits = ['mango','apple','banana','litchi','mava'];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for(fruit of "vikash"){
//     console.log(fruit);
// }

// nested of for of loops

let heroes = [['ironman','spidarman','thor'],['superman','wondor woman','flash']];

for(hero of heroes){
    for(h of hero){
        console.log(h);
    }
}