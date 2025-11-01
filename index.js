const express = require("express")
const path = require("path");
const { json } = require("stream/consumers");

const app = express();
const port = 4002;

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.json())


app.get("/", (req, res)=>{
    res.render("index")
})

app.listen(port, ()=>{
    console.log(`server started at port: ${port}`)
})