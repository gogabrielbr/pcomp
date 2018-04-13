var SerialPort = require('serialport');
var port = new SerialPort('COM5', function (err) {
  if (err) {
    return console.log('Error: ', err.message);
  }
});

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message);
  }
  console.log('message written');
});
