const fs =require("fs");

fs.writeFileSync("./test.txt", "i a creating a file for first time");
fs.writeFileSync("./test.txt", "we want editing");

fs.writeFile("./test.txt", "thhis is async", (error)=>{})