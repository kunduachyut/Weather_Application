const { log } = require("console");
const express = require("express");
const hbs = require("hbs");
const path = require("path");

const app = express();

const weatherData = require("../utils/weatherData")

const port = process.env.port || 3000;

app.get("/" ,(req,res) => {
    res.send("Hellow....");
})

app.get("/weather",(req,res) => {
    if(!req.query.address){
        return res.send("Address id required...");
    }
    weatherData(req.query.address,(error,result) =>{
        if(error){
            return res.send(error);
        }
        res.send(result);
    })
});

app.get("*",(req,res) => {
    res.send("Invalid...")
})

app.listen(port,(res,req) => {
    console.log("Server is listening "+port);
})