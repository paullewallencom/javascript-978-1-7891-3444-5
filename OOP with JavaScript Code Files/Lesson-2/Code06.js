//Person class has been declared in the previous code

function TheatreSeats() {
  var seats = [];
  this.placePerson = function(person) {
	seats.push(person);
  };
  this.countOccupiedSeats = function() {
	return seats.length;
  };
  this.maxSize = 10;
}

TheatreSeats.prototype.isSoldOut = function() {
  return this.countOccupiedSeats() >= this.maxSize;
};

TheatreSeats.prototype.countFreeSeats = function() {
  return this.maxSize - this.countOccupiedSeats();
};
