var myModule = (function() {
	function Person(name, surname) {
	  this.name = name;
	  this.surname = surname;
	}

	return {
	  Person:  Person
	};
})();

var johnSmith = new myModule.Person("John", "Smith");
