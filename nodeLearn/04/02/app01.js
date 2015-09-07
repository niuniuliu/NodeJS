var flight = require('flight');

flight.setOrigin('LAX');
flight.setDestinaton('DCA');
flight.setNumber(462);

console.log(flight.getInfo());

var flight = require('./flight');


var anotherFlight = require('./flight');

console.log(anotherFlight.getInfo());