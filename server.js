const express = require("express");
const PORT = 3000;

const app = express();

app.get('/ukulele', (req, res)=>{
    let obj = {
        "name": "Mayur",
        "class": "11th",
        "subject": "PCMB",
        "Music": "Classical Music",
        "work": "Developer",
    }
    console.log("Request From Sayyam")
    res.json(obj);
})

app.listen(PORT, ()=>{
    console.log("Server Started")
})