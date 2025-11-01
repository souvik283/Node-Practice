// const http = require("http")
const express = require("express")

let app = express()
app.get("/", (req, res)=>{
    return res.send(`${req.query.name}, welcome to Homepage`)
})
app.get("/about", (req, res)=>{
    return res.send(`${req.query.name}, Welcome to about page. Your age is ${req.query.age}`)
})
app.listen(2000, ()=>{
    console.log("Server Started")
})
// let myserver= http.createServer(app)
// myserver.listen(2000, ()=>{
//     console.log("Server Started")
// })