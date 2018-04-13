var SerialPort = require('serialport');// include the library
// get port name from the command line:
var portName = process.argv[2];
var myPort = new SerialPort('COM5', '9600');
var Readline = SerialPort.parsers.Readline;
var parser = new Readline();
myPort.pipe(parser);
