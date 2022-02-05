const chalk = require('chalk')
const { Console } = require("console");
const request = require("request");
const green = chalk.green;
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url =
//   "http://api.weatherstack.com/current?access_key=12ed982a83216d3d10cd91b09baf4e99&query=37.8267,-122.4233&units=f";

// request({ url: url, json: true }, (error, response) => {
//   // console.log(response.body);
//   if (error) {
//       console.log('Unable to connect to weather service')
//   }
//   else if (response.body.error) {
//     console.log('Unable to find location');

//   }
//   else{

//     const temp = response.body.current.temperature;
//     const feelsLike = response.body.current.feelslike;
  
//     console.log(
//       `It is currently ${temp} degree out and feels like ${feelsLike} degree`
//     );
//   }


// });

const location = process.argv[2]

if(!location) {
    console.log('Please provide an address')
} else {
    geocode(location, (error, {latitude, longitude, location} ={}) => {

        if(error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error)
            {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
          })
    
    })    
}




//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

