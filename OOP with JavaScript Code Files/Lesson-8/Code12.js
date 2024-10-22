var geoModule = (function(mathModule) {
	var pi = mathModule.PI;

	function circumference(radius) {
		return 2*pi*radius;
	}

	function circleArea(radius) {
		return pi*mathModule.pow(radius, 2);
	}

	return {
		calculateCircumference:  circumference,
		calculateCircleArea:   circleArea
	};
})(Math);

geoModule = (function(me) {
	var oldCalculateCircleArea = me.calculateCircleArea;

	me.calculateCircleArea = function(radius) {
		return oldCalculateCircleArea(radius).toFixed(2);
	};
	
	return me;
})(geoModule);

console.log(geoModule.calculateCircleArea(5));
//result: 78.54