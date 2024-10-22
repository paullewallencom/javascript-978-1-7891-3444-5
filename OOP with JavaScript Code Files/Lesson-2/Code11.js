var  TheatreSeats = (function() {
  var priv = new WeakMap();
  var _= function(instance) {return priv.get(instance);};

  function TheatreSeatsConstructor() {
	var privateMembers = {seats: []};
	
	priv.set(this, privateMembers);
	this.maxSize = 10;

	}

  TheatreSeatsConstructor.prototype.placePerson = function(person) {
	_(this).seats.push(person);
  };

  TheatreSeatsConstructor.prototype.countOccupiedSeats = function() {
	return _(this).seats.length;
  };

  TheatreSeatsConstructor.prototype.isSoldOut = function() {
	return _(this).seats.length >= this.maxSize;
  };

  TheatreSeatsConstructor.prototype.countFreeSeats = function() {
	return this.maxSize - _(this).seats.length;
  };

  return  TheatreSeatsConstructor;
	
}());
