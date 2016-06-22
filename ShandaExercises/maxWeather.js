// ## Max Weather Temp
//
// Print the average of the temperatures of the list of cities above. You may use the help of the async module.

// if the getWeather function is in a different file you could do something like this
//var getWeather = require("./get-weather-module");

// similar to a ajax api call in jquery
var request = require('request');

// async will allow this program to do things in parallel and check for errors
var async = require('async');

var cities = [
  'Atlanta, GA',
  'Pheonix, AZ',
  'Dallas, TX',
  'Philadelphia, PA'
];


function getWeather(city, callback){
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs:{
      q: city,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    }
  }, function(err, reponse, body){
    if(err){
      // if there is an err, pass that err to the callback function; err with the url or host
      // and do nothing else - return statement
      callback(err);
      return;
    }

    // turn the data that gets returned in to a json format
    var data = JSON.parse(body);

    // if there is an error with the information/data that gets returned
    if(Number(data.cod) >= 400){
      // constructor , makes a new error object, and pass data.messge to the var error and passes that message to the callback function
      var error = new Error(data.message);
      callback(error);
      return;
    }

    // if there are no errors pass a null for error and the data returned for the api call to the callback function
    callback(null, data);
  });
}

// function that gets the average of all the cities temps
function average(results){
  // takes the elemets in the results array and adds the together
  // a is the previous value and b is the current value
  var sum = results.reduce(function(previousValue,currentValue){
    return previousValue + currentValue;
  }, 0);
  return sum / results.length;
}

// function that prints out what the max weather is
function maxWeather(results){
  return Math.max.apply(null, results);
  // or Math.max(...results);
}
//or
// function maxWeather(results){
//   return results.reduce(function(max, result){
//     if(max > temp){
//       return max;
//     }else
//       return temp;
//   }, 0);
// }

/// getWeather function call using async.map (done in parallel) mapSeries(serially)

// async.map will call the getWeather function for the cities array and get back the current temperatures
// param: array, function, callback(err and data returned from the getWeather function)
async.map(cities, getWeather, function(err, results){
  // for each result in results get the temperatures and store them in an array called temps
  // collects all the temperatures
  var temps = results.map(function(result){
    return (result.main.temp);
  });
  console.log(temps);
  console.log('The avg temp: ' + average(temps));
  console.log('The max temp: ' + maxWeather(temps));
});

// mapSeries(serially)
// async.mapSeries(cities, getWeather, function(err, results){
//   var temps = results.map(function(result){
//     return result.main.temp;
//   });
//   console.log(temps);
// });
