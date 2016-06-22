
## Get Weather

Given an array of cities:

var cities = [
  'Atlanta, GA',
  'Pheonix, AZ',
  'Dallas, TX',
  'Philadelphia, PA'
];

Use Open Weather Map API to get their weather and print out their current temperature.

1. Do this in parallel
2. Do this serially

## Max Weather Temp

Print the average of the temperatures of the list of cities above. You may use the help of the async module.

## Make your own HTTP server

Make a server that returns "Hello, world!" to the web browser.

## HTTP Server 2

Make a server which take a name query parameter, and say hello to that name. For example, if your server were running on http://localhost:3000/, then going to the URL http://localhost:3000/?name=Angela should display "Hello, Angela!".

## Making your own module - 1

Create a module that converts a temperature from degrees Celcius to Fahrenheit. Write the following example program called c-to-f-program.js to use that module to do a conversion:

var convertCtoF = require('./c-to-f-module');
var degreesC = Number(process.argv[2]);
var degreesF = convertCtoF(degreesC);
console.log(degreesF);

Example output of the above program:

$ node c-to-f-program.js 18
64.4
$ node c-to-f-program.js 30
86

## Making your own async module - 2

Create your own file summary module. I recommend doing this in two steps:

1. Extracting a function which takes two parameters:
  1. file name
  2. a function that takes two parameters:, `err`, and `summary`. The `err` parameter will be present when an error has occured. The `summary` parameter will be an object containing the summary information about that file. This function will be called once and receive the summary object when ready. The summary object contains 3 properties
    1. lineCount - the number of lines in the file
    2. wordCount - the number of words in the file
    3. charCount - the number of characters in the file
2. Cut that function out, and extract it into a separate file called file-summary-module.js, set up module.exports properly to return that function when the module is required.

The following program file-summary-program.js can be used to test your module:

var fileSummary = require('./file-summary-module');
var filename = process.argv[2];
fileSummary(filename, function(err, summary) {
  if (err) {
    console.error(err.message);
    return
  }
  console.log('Line count:', summary.lineCount);
  console.log('Word count:', summary.wordCount);
  console.log('Character count:', summary.charCount);
});

Example output:

$ node file-summary-program.js hello.txt
Lines: 1
Words: 2
Characters: 13
$ node file-summary-program.js file-that-doesnt-exist.txt
ENOENT: no such file or directory, open 'file-that-doesnt-exist.txt'

## Publishing your own module

You are going to publish your file-summary module to npm. Create a new directory in a separate directory, call it file-summary. cd into the directory, do `npm init`, answer the questions to generate a package.json file. Your module name will need to be unique to the entire npm registery - which is immense. For that reason, to distinguish your file-summary module from other modules, I suggest calling your module file-summary-YOUR_FIRST_NAME, replacing YOUR_FIRST_NAME with your first name.

Create an index.js file, paste in the contents of file-summary-module.js from the previous exercise. Now you are almost ready to publish, but one thing first: create a user account on npmjs.org:

npm adduser

It will ask for a username, password, and an email address. Once this is done, you can

npm publish

You've published you first module! Now to test that it actually works. Create a brand new project directory. Within that directory, run `npm install YOUR_MODULE_NAME` - replacing YOUR_MODULE_NAME with the name of your module. When write a program to test it, similar to test-summary-program.js in the previous exercise, except this time, you can require('YOUR_MODULE_NAME') directly instead of using a relative file name.
