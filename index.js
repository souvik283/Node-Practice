const http = require("http")
const fs = require("fs")
const url = require("url")

const myserver = http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
        return res.end();
    }
    let myurl = url.parse(req.url, true)
    console.log(myurl)
    let log = `${req.method} New request is recieved from ${req.url} at ${new Date().getHours().toLocaleString()} : ${new Date().getMinutes().toLocaleString()} Date: ${new Date().getDate().toLocaleString()}/${new Date().getMonth().toLocaleString()}/${new Date().getFullYear().toLocaleString()}`

    fs.appendFile("test.txt", `\n ${log}`, (err, result) => {
        switch (myurl.pathname) {
            case "/":
                const name = myurl.query.name
                res.end(`Welcome ${name} and have a id: ${myurl.query.id}`)
                break;
            case "/search":
                let searchItem = myurl.query.search_item
                res.end(searchItem)
                break;
            case "/signin":
                if (req.method === "GET") {
                    res.end("this is sign up form")
                }
                else if (req.method === "POST") {
                    res.end("Succesfully submitted")
                }
            default:
                res.end("404 Not Found")
                break;
        }
    })

})

myserver.listen(8000, () => console.log("Server Started"))