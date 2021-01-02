var pi = 3.14;

function circumference(radius) {
	return 2*pi*radius;
}

function circleArea(radius) {
	return pi*radius*radius;
}

module.exports = {
	calculateCircumference:  circumference,
	calculateCircleArea:   circleArea
};
