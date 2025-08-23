const { time, timeLog } = require("console");
const fs =require("fs");

// fs.writeFileSync("./test.txt", "i a creating a file for first time");
// fs.writeFileSync("./test.txt", "we want editing");

// fs.writeFile("./test.txt", "thhis is async", (error)=>{})

// console.log(fs.readFileSync("./contact.txt", "utf-8"))

// fs.readFile("./contact.txt", "utf-8", (err, result)=>{
//     if (err) {
//         console.log("error"  + err)
//     }else{
//         console.log(result)
//     }
// })

// fs.appendFileSync("./test.txt", new Date().getMinutes().toLocaleString()+"\n");
// console.log(new Date().getDate().toLocaleString())
// fs.cpSync("./test.txt", "./tesstt.txt")
// fs.unlinkSync("tesstt.txt")
// console.log(fs.statSync("./test.txt"))
// fs.mkdirSync("my-docs")
// fs.mkdirSync("my-docs/a/dx", {recursive: true})

// console.log("1")
// console.log(fs.readFileSync("./tecbv.c", "utf-8"))
// fs.readFile("tecbv.c", "utf-8", (err, res)=>{
//     console.log(res)
// })
// console.log("2")

let os = require("os")
console.log(os.cpus().length)