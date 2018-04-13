
var oldLikes = 0;
var newLikes;
var led;
var servo;
var x =0;//conts the number of checks and is used to move servo

var request = require('request');
//johnny five is a node library for arduino
var five = require("johnny-five");

//var numberLikes = 0;

var board = new five.Board();

board.on("ready", function() {

  led = new five.Led(13);
  servo = new five.Servo(10);


//turns LED/Solenoid off when exiting program. This is to avoid overheating. Also resets the servo.
  this.on("exit", function() {
      led.off();
      servo.min()
    });

    this.repl.inject({
      servo: servo
    });
  //  servo.sweep();
  // servo.to(90);
});




function intervalFunction() {
  //numberLikes++;
  //console.log(numberLikes);
  // get number of likes fro facebook api
  // write number of likes to serial

request('https://graph.facebook.com/v2.11/XXXXXXXXXXXXXXXXXXX/?access_token=XXXXXXXXXXXXXXX|XXXXXXXXXXXXXXXXXXXXX&fields=fan_count', function (error, response, body)
 {
   console.log("old value1", oldLikes);
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  var parsedBody = JSON.parse(body);
  console.log('parsed json:', parsedBody)

  console.log("fan count!!!!!!:", parsedBody.fan_count)

  newLikes = parsedBody.fan_count;

  likeTime();

//X sets the interval number - it is used to control de servo step and the moment the solenoid/led is activated
  x= x +1;

  console.log("valor x",x);
  //move servo of the LikeTimer
if (x<17){
  servo.to(10*x);
}




});



oldLikes = newLikes;

}

//function that checks if new Likes were added and execute actions acordingly
function likeTime(){
  if(oldLikes < newLikes){
    led.stop();
  led.off();
  servo.to(0);
  x=0;
  }
  //x = number of checks
  else if
  ((oldLikes >= newLikes)&&(x>=17)){
    //led.blink turns the solenoid on and off with a certain interval (interval)
    led.blink(1000);



  }
}



//interval of time that it will check for likes
setInterval (intervalFunction, 3000);
