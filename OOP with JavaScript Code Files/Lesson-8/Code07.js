var geoModule = (function() {
	var pi = 3.14;

	function circumference(radius) {
		return 2*pi*radius;
	}

	function circleArea(radius) {
		return pi*radius*radius;
	}

	return {
		calculateCircumference:  circumference,
		calculateCircleArea:   circleArea
	};
})();

console.log(geoModule.calculateCircumference (5));
//result: 31.400000000000002

console.log(geoModule.calculateCircleArea(5));
//result: 78.5