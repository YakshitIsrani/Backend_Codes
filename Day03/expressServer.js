//Express Server
const express=require("express");
const app=express();

// app.use((req,res)=>{
//     res.send("Hello jii");
// })

//Sending json response
// app.use((req,res)=>{
//     res.send({"name":"Yakshit", "age":32});
// })

//Routing 
app.use("/about", (req,res)=>{
    res.send("On about page");
})
app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.get("/payment",(req,res)=>{
    res.send("Payment page");
})
app.get("/data",(req,res)=>{
    res.send({name:"yakshit", age:34, gender:"Male"});
})

app.use(express.json());

app.post("/user",(req,res)=>{
    res.send("Data submitted successfully");
    console.log(req.body);
})

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})