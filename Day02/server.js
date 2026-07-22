//Creating node js server

const http=require("http");

const server=http.createServer((req,res)=>{
    //Handling Routing in node js server
    if(req.url==="/")
        res.end("Home Page");
    else if (req.url==="/about")
        res.end("About Page")
    else if (req.url==="/payment")
        res.end("Payment Page");
    else res.end("Page not found")
    
})

server.listen(4000,()=>{
    console.log("Server listening at port number 4000");
})