var flight = require('./flight');

var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};
var pl = flight(pdxlax);

pl.triggerDepart();
pl.triggerArrive();

var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};
var ad = flight(ausdca);
ad.triggerDepart();
ad.triggerArrive();

console.log(ad.getInformation());
console.log(pl.getInformation());


/*var a = {
		a1 : 'a1',
		a2 : 'a1',
		a3 : 'a1',
		a4 : 'a1',
		a5 : b = {
			b1 : 'a5b1',
			b2 : 'a5b2',
			b3 : 'a5b3',
			b4 : function(abc) {
				var b4abc = abc;
				return b4abc;
			}
		}
};
console.log(typeof a)
console.log(typeof a.a2)
console.log(a.a5.b3)
console.log(a.a5.b4('abcde'));*/


// var getValue = {
// a : "value1-a",
// b : "value2-b",
// getFirst:function  (s) {
// 	// console.log("getFirst-function");
// 	var afunc = s;
// 	return afunc;
// }

// };
// console.log(typeof getValue);
// console.log(getValue.a);
// console.log(getValue["b"]);
// console.log(typeof getValue.getFirst('s'));
// console.log(getValue.getFirst('string1'));
//console.log( getValue.getFirst());


// console.log(Date.now())

/*
var startMSec = Date.now();
var integer = 0;
for (var i = 360000000; i >= 0; i--) { integer += i; }
var endMSec = Date.now();
console.log(integer);

var elapsed = (endMSec - startMSec) / 1000;
console.log("You took " + elapsed + " seconds" + " to type");
*/