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

geoModule = (function(mathModule, me) {
	me.calculateSphereVolume = function(radius) {
		return 4*mathModule.PI*mathModule.pow(radius, 2);
	};
	
	return me;
})(Math, geoModule);


console.log(geoModule.calculateCircumference (5));
//result: 31.41592653589793

console.log(geoModule.calculateCircleArea(5));
//result: 78.53981633974483

console.log(geoModule.calculateSphereVolume(5));
//result: 314.1592653589793