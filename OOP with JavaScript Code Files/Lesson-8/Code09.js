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

console.log(geoModule.calculateCircumference(5));
//result: 31.41592653589793

console.log(geoModule.calculateCircleArea(5));
//result: 78.53981633974483
