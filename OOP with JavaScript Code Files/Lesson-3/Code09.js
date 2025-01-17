function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Object.defineProperty(
  Person.prototype, 
  "fullName", {
	get: function() { 
		return this.name + " " + this.surname; 
	}
  }
);

Object.defineProperty(
  Developer.prototype, 
  "fullName", {
	get: function() { 
		return "Dev " + this.name + " " + this.surname; 
	}
  }
);


var johnSmith = new Person("John", "Smith");
var marioRossi = new Developer("Mario", "Rossi", "JavaScript");

console.log(johnSmith.fullName);		//result: "John Smith"
console.log(marioRossi.fullName);		//result: "Dev Mario Rossi"
