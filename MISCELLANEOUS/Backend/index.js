const express = require("express");
const app = express();

const port = 8082;
app.usr(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/register",(req,res)=>{
    let {user,password} = req.query;
    res.send(`standard GET response. Welcome ${user}!`);
})

app.post("/register",(req,res)=>{
    let {user,password} = req.body;
    res.send(`standard POST response. Welcome ${user}!`);
})
app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
});