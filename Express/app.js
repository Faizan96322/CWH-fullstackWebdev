const express = require("express");
//const { request } = require("https");
const fs = require('fs');
const path = require('path');
const app =express();
const port = 80;

//Express realated stuff
app.use('/static' , express.static('static'));
app.use(express.urlencoded());

//Pug related stuff
app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'))


//End Points
app.get("/",(req,res)=>{
    const con = "This is the best content on the Internet, so use it wisely"
    const params = {"Title": "PubG is the best game",'content':con}
    res.render('Index.pug',params);
});

app.post("/",(req,res) =>{
    Name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of client is ${Name} , ${age} years old, My client is a ${gender}, address of my client ${address}, more about my client ${more} `
    fs.writeFileSync('output.txt',outputToWrite);
    const params = {'message':"Your form has been submitted successfully"}
    res.status(200).render('index.pug',params);

})


//Start the server
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})