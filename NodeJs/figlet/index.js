const figlet = require("figlet");

figlet("vikash--pandey",function (err,data){
    if(err){
        console.log("something wrnt wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});