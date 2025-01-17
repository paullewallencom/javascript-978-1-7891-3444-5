function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

var myMixin = {
  getFullName: function() { 
	return this.name + " " + this.surname;
  }
};

function augment(destination, source) {
  for (var methodName in source) {
	if (source.hasOwnProperty(methodName)) {
      destination[methodName] = source[methodName];
	}
  }
  return destination; 
}

augment(Person.prototype, myMixin);

var johnSmith = new Person("John", "Smith");

console.log(johnSmith.getFullName());		//result: "John Smith"
