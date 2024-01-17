// function savetoDb(data,success,failure){
//     let internetSpedd = Math.floor(Math.random()*10)+1;
//     if(internetSpedd>5){
//         success();
//     }else{
//         failure();
//     }
// }

// savetoDb(
//     "vikash",
//     () =>{
//         console.log("success : your data was saved");
//     },
//     savetoDb(
//         "hello ",
//         () =>{
//             console.log("hello : your data was saved");
//         },
//         ()=>{
//             console.log("hello : your data was not saved");
//         },
//         savetoDb(
//             "pandey",
//             () =>{
//                 console.log("pandey : your data was saved");
//             }
//         ),
//     ),
//     () =>{
//         console.log("failure : weak connection . data not saved");
//     }
// )

// function savetoDb(data){
//     return new Promise((res,rej)=>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed>5){
//             res("data was saved")
//         }else{
//             rej("data was not saved");
//         }
//     });
// }

// savetoDb("data")
// .then((result)=>{
//     console.log(result);
//     console.log("promise was resolved");
//     return savetoDb("data2");
// })
// .then(()=>{
//     console.log("data2 saved");
//     return savetoDb("pandey");
// })
// .then(()=>{
//     console.log("data3 saved");
// })
// .catch((err)=>{
//     console.log(err);
//     console.log("promise was rejected");
// })


// promise chaining


