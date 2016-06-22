var getWeather = require('./get-weather-module');
var city = process.argv[2];
getWeather(city, function(err, data) {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Weather:', data.weather[0].description);
  console.log('Temperature:', data.main.temp + '°');
});
