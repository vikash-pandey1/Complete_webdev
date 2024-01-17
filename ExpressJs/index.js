const express = require("express");
const app = express();

// console.dir(app)
let port = 3000;//8080

app.listen(port, () => {
    console.log(`port is listening on ${port}`);
})


app.get("/", (req, res) => {
    res.send("you contacted root path");
});
// app.get("/apple",(req,res)=>{
//     res.send("you contacted apple path");
// })
// app.get("/orange",(req,res)=>{
//     res.send("you contacted orange path");
// })
// app.get("*",(req,res)=>{
//     res.send("this path does not exits")
// })
// app.post("/",(req,res)=>{
//     res.send("you contacted post path");
// })

// path parameters
app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let code = `<h1>welcome to the page of @${username}</h1>;`
    res.send(code);
});


// query string
app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("<h1>nothing search</h1>")
    }
    res.send(`<h1>search results for query: ${q}</h1>`)
})


// app.use((req,res)=>{
//     // console.log(req);
//     console.log("req received");
//     // res.send({
//     //     name:'apple',
//     //     color:'red'
//     // });
//     res.send("<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>");
//     // res.send(code);
// });
