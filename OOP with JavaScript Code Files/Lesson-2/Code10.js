var  TheatreSeats = (function() {
  var priv = new WeakMap();

  function TheatreSeatsConstructor() {
	var privateMembers = {seats: []};
	
	priv.set(this, privateMembers);
	
	this.maxSize = 10;
  }

  TheatreSeatsConstructor.prototype.placePerson = function(person) {
	priv.get(this).seats.push(person);
  };

  TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
	return priv.get(this).seats.length;
  };

  TheatreSeatsConstructor.prototype.isSoldOut = function() {
	return priv.get(this).seats.length >= this.maxSize;
  };

  TheatreSeatsConstructor.prototype.countFreeSeats = function() {
	return this.maxSize - priv.get(this).seats.length;
  };

  return  TheatreSeatsConstructor;
  
}());
