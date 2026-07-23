const express=require("express");
const server=express();

const bookstore=[
    {name:"book1",author:"auth1", price:100},
    {name:"book2",author:"auth2", price:200},
    {name:"book3",author:"auth3", price:300},
    {name:"book4",author:"auth4", price:400},
    {name:"book5",author:"auth5", price:500}
]

server.use(express.json());

//Sending whole book store
server.get("/bookStore",(req,res)=>{
    res.send(bookstore);
})

//Sending requested book
server.get("/bookStore/:book",(req,res)=>{
    const bookName=req.params.book;
    const bookDetails=bookstore.find(book=>(book.name===bookName));
    res.send(bookDetails);
})

//Saving book in book store
server.post("/bookStore",(req,res)=>{
    const book=req.body;
    bookstore.push(book);
    res.send("Book saved successfully");
})

//Patch update
server.patch("/bookStore",(req,res)=>{
    const book=bookstore.find(book=>(book.name===req.body.name))
    if("author" in req.body)
        book.author=req.body.author;
    if("price" in req.body)
        book.price=req.body.price;

    res.send("Patch updated");
    console.log(bookstore);

})
//Put update
server.put("/bookStore", (req, res) => {
    const book = bookstore.find(book => (book.name === req.body.name))

    book.author = req.body.author;
    book.price = req.body.price;

    res.send("Put updated");
    console.log(bookstore);

})



server.listen(4000,()=>{
    console.log("Listening at port 4000");
})