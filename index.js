const http = require("http")
const fs = require("fs")

const myserver = http.createServer((req, res) => {
    let log = `New request is recieved from ${req.url} at ${new Date().getHours().toLocaleString()} : ${new Date().getMinutes().toLocaleString()} Date: ${new Date().getDate().toLocaleString()}/${new Date().getMonth().toLocaleString()}/${new Date().getFullYear().toLocaleString()}`
    fs.appendFile("test.txt", `\n ${log}`, (err, result) => {
        switch (req.url) {
            case "/":
                res.end("Welcome To Homepage")
                break;
            case "/about":
                res.end("Welcome To About page Server")
                break;
            default:
                res.end("404 Not Found")
                break;
        }
    })

})

myserver.listen(8000, () => console.log("Server Started"))