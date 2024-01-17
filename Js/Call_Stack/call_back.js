h1 = document.querySelector('h1');

function changeColor(color, delay) {
    return new Promise((res,rej)=>{
        setTimeout(() => {
            let num = Math.floor(Math.random()*10)+1;
            if(num>3){
                rej("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            res("color changed?");
        }, delay);
    });
}

async function demo(){
    try{
        await changeColor('red',1000);
    await changeColor('blue',1000);
    await changeColor('pink',1000);
    await changeColor('yellow',1000);
    await changeColor('red',1000);
    }
    catch(err){
        console.log(err);
    }

    let a = 5;
    console.log(a);

}
demo();

// changeColor("red",1000)
// .then(()=>{
//     console.log("rd color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange complated");
//     return changeColor("blue",1000);
// })
// .then(()=>{
//     console.log("blue was completed");
//     return changeColor("yellow",1000);
// })
// .then(()=>{
//     console.log("yellow complated");
//     return changeColor("blue",1000);
// });

// changeColor("blue", 1000, () => {
//     changeColor("green", 1000,()=>{
//         changeColor("yellow",2000);
//     });
// });