var fs = require('fs');
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Name agent:", function(name) {

	fs.readFile(name, function (err, data) {
	  if (err) return console.log('You don´t read that!');
	  try{
		console.log(decoder.write(data));
	  }catch(e){
	   console.log(e);
	 }; 
	  
	});

  rl.close();
});

