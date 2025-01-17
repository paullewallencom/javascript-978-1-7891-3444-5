var  TheatreSeats = (function() {
  var priv = {};
  var id = 0;
	
  function TheatreSeatsConstructor() {
	this.id = id++;
	this.maxSize = 10;
	priv[this.id] = {};
	priv[this.id].seats = [];
  }

  TheatreSeatsConstructor.prototype.placePerson = function(person) {
	priv[this.id].seats.push(person);
  };

  TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
	return priv[this.id].seats.length;
  };

  TheatreSeatsConstructor.prototype.isSoldOut = function() {
	return priv[this.id].seats.length >= this.maxSize;
  };

  TheatreSeatsConstructor.prototype.countFreeSeats = function() {
	return this.maxSize - priv[this.id].seats.length;
  };

  return  TheatreSeatsConstructor;
  
}());
