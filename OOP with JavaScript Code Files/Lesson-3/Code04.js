function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments);
  this.knownLanguage =  knownLanguage;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;