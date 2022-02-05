# weatherApp
This is the implementation of weather app implementing nodeJs functionalities with CLI

1. use #npm install to install all the realated dependencies mention in the package.json as they are not included in the github reppo
2. To simply know the temperature of the place, use the command line and 
3.  $ node app.js name-of-city

4. for e.g : if you want to know the temperature of the Dharan:
       $ node app.js Dharan
 
 
 ## Basic working
1. Pass the city name through CLI
2. which will be converted to longititude, and latitude with the help of mapbox API, concept known as forward geocoding through 
3. that will be passed to weatherstack API and we will be extracting temperature properties through HTTP request body


#APIS USED
1. weatherstack   [ to extract the temperature through HTTP request body]
2. mapbox         [to extract the latitude and longitude of place and pass it to weatherstack API]


###Reference:
1. Udemy: The Complete Node.js Developer Course (3rd Edition) by Andrew Mead
