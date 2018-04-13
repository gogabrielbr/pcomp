var SerialPort = require('serialport');// include the library
// get port name from the command line:
var portName = process.argv[2];
var myPort = new SerialPort('COM5', '9600');
// var Readline = SerialPort.parsers.Readline;
// var parser = new Readline();
// myPort.pipe(parser);

//list of different events. Callback functions
myPort.on('open', showPortOpen);
parser.on('data', readSerialData);
myPort.on('close', showPortClose);
myPort.on('error', showError);

function showPortOpen() {
   console.log('port open. Data rate: ' + myPort.baudRate);
}

function readSerialData(data) {
   console.log(data);
}

function showPortClose() {
   console.log('port closed.');
}

function showError(error) {
   console.log('Serial port error: ' + error);
