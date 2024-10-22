function Person(name, surname) {
  this.name = name;
  this.surname = surname;
	
  Object.preventExtensions(this);
}

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments);
  this.knownLanguage =  knownLanguage;
}

var dev = new Developer("Mario", "Rossi", "JavaScript");
console.log(dev.knownLanguage);		//result:  undefined
