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

geoModule.triangleModule = (function() {

	function perimeter(side1, side2, side3) {
		return side1+side2+side3;
	}

	function area(basis, height) {
		return basis*height/2;
	}

	return {
		calculateTrianglePerimeter:  perimeter,
		calculateTriangleArea:   area
	};

})();

geoModule.triangleModule.calculateTriangleArea(3,4);		//result: 6