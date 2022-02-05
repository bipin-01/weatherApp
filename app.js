const chalk = require('chalk')
const { Console } = require("console");
const request = require("request");
const green = chalk.green;
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


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
