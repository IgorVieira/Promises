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
	  if (err){
	 	console.log('You don´t read that!');
	  }else{
		console.log(decoder.write(data));  	
	  }
	});

  rl.close();
});



// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Name agent:", function(answer) {
  
// fs.readFile('./'+answer, function (err, data) {
//   if (err){
//  	console.log('You don´t read that!');
//   }else{
// 	console.log(decoder.write(data));  	
//   }
// });
  	

//   rl.close();
// });







// fs.readFile(function(err, data){

// })


 // function findAgent(filename, enc){
   // 		return new Promise(function (fulfill, reject){
   // 			fs.readFile(filename, function(err, data){
   // 				if (err) reject(err);
   // 				else console.log(decoder.write(data));
   // 			})
   // 		});
   // }




// function readFile(filename, enc){
//   return new Promise(function (fulfill, reject){
//     fs.readFile(filename, enc, function (err, res){
//       if (err) reject(err);
//       else fulfill(res);
//     });
//   });
// }


// function readJSON(filename){
//   return new Promise(function (fulfill, reject){
//     readFile(filename, 'utf8').done(function (res){
//       try {
//         fulfill(JSON.parse(res));
//       } catch (ex) {
//         reject(ex);
//       }
//     }, reject);
//   });
// }