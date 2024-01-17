// let jsonData = '{"fact":"Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC.","length":105}';

// let a = JSON.parse(jsonData);  // json to object
// console.log(a.fact);

// let obj = {
//     name:'ram',
//     age:43,
//     marks:99
// };

// let aa = JSON.stringify(obj);  // object to json
// console.log(aa);


// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data1: ",data.fact);
//     return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("data2: ",data2.fact);
// }).catch((err)=>{
//     console.log(err);
// });

// async function function to fetch url

// async function getFacts(){
//     try{
//         let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res1 = await fetch(url);
//     let data1 = await res1.json();
//     console.log(data1.fact);
//     }catch(err){
//         console.log(err);
//     }
//     console.log('hey');
// }

// axios


let url = "https://catfact.ninja/fact";
// let btn1 = document.querySelector("button");

// btn1.addEventListener("click",async () =>{
//     let fact = getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(err){
//         console.log(err);
//         return "no fact found";
//     }
// }

// async function getFacts(){
//     try{
//         const config = {header:{Accept:"application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res);
//     }catch(err){
//         console.log(err);
//     }
// }

let urla = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelectorAll("button");

btn.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let college = await getColleges(country);
    console.log(college);
    show(college);
})

function show(college){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of college){
        let li = document.createElement("li");
        li.innerText = col.data;
        list.appendChild(li);
    }
}

async function getColleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(err){
        console.log(err);
        return [];
    }
}