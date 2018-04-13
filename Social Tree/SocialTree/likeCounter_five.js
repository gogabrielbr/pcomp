
var oldLikes = 0;
var newLikes;
var led;

var request = require('request');
var five = require("johnny-five");

//var numberLikes = 0;

var board = new five.Board();

board.on("ready", function() {

  led = new five.Led(13);

//turns LED/Solenoid off when exiting program. This is to avoid overheating
  this.on("exit", function() {
      led.off();
    });

});




function intervalFunction() {
  //numberLikes++;
  //console.log(numberLikes);
  // get number of likes fro facebook api
  // write number of likes to serial

request('https://graph.facebook.com/v2.11/1804701356496677/?access_token=129775407689050|78ed9db9ed017b09f4a610c26f33bbf7&fields=fan_count', function (error, response, body)
 {
   console.log("old value1", oldLikes);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  var parsedBody = JSON.parse(body);
  console.log('parsed json:', parsedBody)

  console.log("fan count:", parsedBody.fan_count)

  newLikes = parsedBody.fan_count;

  likeTime();



});



oldLikes = newLikes;

}

function likeTime(){
  if(oldLikes < newLikes){
    led.stop();
  led.off();
  }
  else if
  (oldLikes >= newLikes){
    led.blink(1000);
  }
}



//interval of time that it will check for likes
setInterval (intervalFunction, 8000);


//graph.facebook.com/v2.11/364263730369745/likes HTTP/1.1
//https://graph.facebook.com/v2.11/364263730369745/likes?access_token=129775407689050|78ed9db9ed017b09f4a610c26f33bbf7
//https://graph.facebook.com/v2.11/1804701356496677/?access_token=129775407689050|78ed9db9ed017b09f4a610c26f33bbf7&fields=fan_count
