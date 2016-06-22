// require the http module
var http = require('http');

// create an http server passing it a request/response handler
// function. The function will be invoked for each incoming
// request, and will respond to the request accordingly via
// the response object.
var server = http.createServer(function(request, response) {
  response.write('Hello world');
  response.end();
});

// Start listening to incoming requests
server.listen(8000);
