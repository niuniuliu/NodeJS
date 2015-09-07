var number, origin, destination;

exports.setNumber = function (num) {
	number = num;
};

exports.setOrigin = function (o) {
	origin = o;
};

exports.setDestinaton = function (d) {
	destination = d;
};

exports.getInfo = function() {

	return {
		number: number,
		origin: origin,
		destination: destination
	};
};