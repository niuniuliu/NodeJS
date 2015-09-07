module.exports = function (info) {

	var values = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};

	for(var prop in values) {
		if(values[prop] !== 'undefined') {
			values[prop] = info[prop];
		}
	}

	var func = {
		triggerDepart: function () {
			// values.actualDepart = Date.now();
			values.actualDepart = Date();
		},
		triggerArrive: function () {
			// values.actualArrive = Date.now();
			values.actualArrive = Date();
		},
		getInformation: function () {
			return values;
		}
	};

	return func;

};