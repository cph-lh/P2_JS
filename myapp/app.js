let express = require("express");

let app = express();

app.use(function (req,res,next){console.log("Time :", Date.now()+" Log all requests");
next();
});

app.use(function (req,res,next){
req.status = "SuperUser";
next();
});

app.get("/",(req,res)=>{
    let status = req.status;
    if (status === "WrongUser")
    {
        res.send("fgt");
    }
    res.send("Hello "+status+"?!");
});
app.get("/world",(req,res)=>res.send("Hello world!"));

app.use(function (req,res,next){console.log("Time2 :", Date.now()+" Log all requests");
next();
});

app.listen(3333,()=>console.log("Server started"));

