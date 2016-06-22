// Creating a web server that prints out Hello World 

// building a servie api and someone is sending me a reqest to get some data

var http = require('http');
var html = `
  <html>
  <h1>Hello World</h1>
  </html>`;

// create an http sever passing it a request/response handler function
// the function will be invoke for each incoming request
// ad will respond to the request accordinly via the response object

var server = http.createServer(function(request, response){
  response.write(html);
  response.end();
});


// start lisenting to incoming request
// callback function, gets called when the reqest to the os is successful
server.listen(8000, function(){
  console.log('Listening on port 8000');
});
