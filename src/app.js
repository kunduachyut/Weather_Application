const { log } = require("console");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../template/views");
const partionalsPath = path.join(__dirname,"../template/partials");


app.set("view engine","hbs");
app.set("views",viewsPath);
hbs.registerPartials(partionalsPath);
app.use(express.static(publicPath));

const weatherData = require("../utils/weatherData");
const { title } = require("process");

const port = process.env.port || 3000;

app.get("/" ,(req,res) => {
    res.render("index",{ title: "Weather App" });
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
    res.render("404",{ title:"Invalid input" });
});

app.listen(port,(res,req) => {
    console.log("Server is listening "+port);
})