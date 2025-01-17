function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.getFullName = function() {
  return this.name + " " + this.surname;
};

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments);
  this.knownLanguage =  knownLanguage;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getFullName = function() {
  return "Dev " + Person.prototype.getFullName.call(this);
};


var johnSmith = new Person("John", "Smith");
var marioRossi = new Developer("Mario", "Rossi", "JavaScript");

console.log(johnSmith.getFullName());		//result: "John Smith"
console.log(marioRossi.getFullName());		//result: "Dev Mario Rossi"

