const fs = require("fs");
let text = fs.readFileSync("read16.txt", "utf-8");
text = text.replace("browser", "Faizan");

console.log("The content of the file is: ");

console.log(text);

console.log("Creating a new file...")
fs.writeFileSync("Faizan16.txt",text);
let newfs = fs.readFileSync("Faizan16.txt","ascii"); 
console.log(newfs);