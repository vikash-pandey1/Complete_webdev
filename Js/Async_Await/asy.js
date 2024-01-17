// async function greet(){
//     throw "some random error"
//     return "hello";
// }

// greet().then(()=>{
//     console.log("promise was resolved");
// }).catch((err)=>{
//     console.log("promise was rejected with err;",err);
// });

// arrow function with async 
let hello = async () =>{

}

//Await keyword

function getNum(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
        let num = Math.floor(Math.random()*10)+1;
        console.log(num);
        res();
        }, 1000);
    });
}
 async function demo(){
    await getNum();
    await getNum();
    await getNum();
}
demo();