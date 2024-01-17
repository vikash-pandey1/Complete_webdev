const express = require("express");
const path = require("path")
const app = express();

const port = 3000;
app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/ig/:username",(req,res)=>{
    const followers = ["adam",'ram','shyam','hari'];
    let {username} = req.params;
    res.render("instagram.ejs",{username,followers})
})
app.get("/hello",(req,res)=>{
    res.send("hello");
})

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{diceVal});
})

app.listen(port,()=>{
    console.log(`port is listening on ${port}`);
})
