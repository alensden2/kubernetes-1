const express = require("express");

const PORT = 3000;

const app = express();

app.get("/", (req,res) => {
    res.json("hello world from a kubernetes cluster!!!")
})

app.listen(PORT,() => {
    console.log("Server running on 3000")
})