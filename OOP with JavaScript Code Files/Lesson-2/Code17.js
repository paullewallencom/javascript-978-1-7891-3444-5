var  TheatreSeats = (function() {
  "use strict"; 
  var priv = new WeakMap();
  var _= function(instance) {return priv.get(instance);};

  class TheatreSeatsClass {
    constructor() {
      var privateMembers = {seats: []};
      priv.set(this, privateMembers);
      this.maxSize = 10;
    }

    placePerson(person) {
      _(this).seats.push(person);
    } 

    countOccupiedSeats() {
      return _(this).seats.length;
    }

    isSoldOut() {
      return _(this).seats.length >= this.maxSize;
    }

    countFreeSeats() {
      return this.maxSize - _(this).seats.length;
    }
  }

  return  TheatreSeatsClass;

}());
