const express = require("express");
const { hostname } = require("os");
const app = express();
const ExpressError = require("./ExpressError");

const port = 8081;

const path = require("path");

app.use(express.static(path.join(__dirname,"ejs")));
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("hi i am middleware");
    // res.send("middleware finish");
    next();
});
app.use((req,res,next)=>{
    console.log("hi i am 2nd middleware");
    // res.send("middleware finish");
    next();
})


// api token -- give access to user
app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED");
})
app.get("/api",(req,res)=>{
    res.send("data");
})

// api token -- give access to user

// multiple middle waress
const checkToken = (req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new Error("ACCESS DENIED");
};

// app.get("/wrong",(req,res)=>{
//     abcd = abcd;
// })

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})


// creating utility middlewares -- logger

// app.use((req,res,next)=>{ // logger
//     req.responseTime = new Date(Date.now()).toString();
//     console.log(req.method, req.path, req.responseTime, req,hostname);
//     next(); 
// })
app.get("/",(req,res)=>{
    res.send("this is a root")
})

app.get("/random",(req,res)=>{
    res.send("this is a random page")
})
app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admid forbidden")
})
// error handling code
app.use((err,req,res,next)=>{
    let {status = 500,message = "some error occured"} = err;
    res.status(status).send(message);
    //next(err);  // this is going to call error hanglink middleware
})

// app.use((req,res)=>{
//     res.status(404).send("page not found")
// })


app.listen(port,()=>{
    console.log(`server listening on ${port}`);
})