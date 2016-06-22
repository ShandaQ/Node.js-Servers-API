var request = require('request');
var timestamp = require('./timestamp');

// extract my own asynchronous function
function getWeather(city, callback) {
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs: {
      q: city,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    }
  }, function(err, response, body) {
    if (err) {
      // call the callback
      callback(err);
      return;
    }
    // convert the body in JSON format to a JS object
    var data = JSON.parse(body);
    // call the callback, passing null for err to signal success
    callback(null, data);
  });
}

timestamp('get Atlanta');

getWeather('Atlanta, GA', function(err, atlanta) {
  timestamp('returned Atlanta');
  if (err) {
    console.error(err.message);
    return;
  }
  console.log('Atlanta, GA');
  console.log('  Weather:', atlanta.weather[0].description);
  console.log('  Temperature:', atlanta.main.temp + '°');

  timestamp('get Dallas');

  getWeather('Dallas, TX', function(err, dallas) {
    timestamp('returned Dallas');
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Dallas, TX');
    console.log('  Weather:', dallas.weather[0].description);
    console.log('  Temperature:', dallas.main.temp + '°');

    compare(atlanta, dallas);
  });
});

function compare(atlantaWeather, dallasWeather) {
  var difference = atlantaWeather.main.temp - dallasWeather.main.temp;
  if (difference > 0) {
    console.log('Atlanta is hotter than Dallas by ' + difference.toFixed(0) + '°');
  } else {
    console.log('Atlanta is cooler than Dallas by ' + (-difference).toFixed(0) + '°');
  }
}
