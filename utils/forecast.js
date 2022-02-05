const request = require('request');


const forecast = (longitude, latitude, callback) => {
    const url =
  `http://api.weatherstack.com/current?access_key=12ed982a83216d3d10cd91b09baf4e99&query=${longitude},${latitude}`;
  
  request( {url: url, json: true}, (error, {body}) => {
    // console.log(response.body.success)

      if(error) {
          callback('Low level error', undefined);
      }

      else if(body.success === false){
          callback('Enter a valid longititude and latitude', undefined)
      }
      else{
          callback(undefined,  `It is currently ${body.current.temperature} degree out and feels like ${body.current.feelslike} degree`)
      }
  
})
}

module.exports = forecast;