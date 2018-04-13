var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var led = new five.Led(13);

  // "blink" the led in 500ms on-off phase periods
led.on(1000)
  led.stop(1500);
  led.off(200)

});
