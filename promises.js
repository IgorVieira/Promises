
var bluebird = require("bluebird");
var fs = require("fs");
bluebird.promisifyAll(fs);
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Search:", function(name) {
	
	var Promise = fs.readFileAsync(name);

	Promise.then(function(data) {
	    console.log(decoder.write(data));  
	})
	.catch(SyntaxError, function(e) {
	    console.error("invalid json in file");
	})
	.catch(function(e) {
	    console.error("unable to read file");
	})

  rl.close();
});

