//Creating node js server

const http=require("http");

const server=http.createServer((req,res)=>{
    res.end("Samjha bhiduuu");
})

server.listen(4000,()=>{
    console.log("Server listening at port number 4000");
})