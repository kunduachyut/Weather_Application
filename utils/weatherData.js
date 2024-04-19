const request = require("request");

const openWeatherMap = {
    BASE_URL : "https://api.openweathermap.org/data/2.5/weather?q=",
    SECRET_KEY : "67c658c30686b3ad2d28bb10e02a4d55",
};

const weatherData = (address,callback) => {
    const url = openWeatherMap.BASE_URL+encodeURIComponent(address) + "&APPID=" + openWeatherMap.SECRET_KEY;
    console.log(url);
    request({url,json:true},(error , data) =>{
       if(error){
        callback(true,"Unable to fetch the data" + error)
       } 
       callback(false,data?.body)
    })
};

module.exports = weatherData;