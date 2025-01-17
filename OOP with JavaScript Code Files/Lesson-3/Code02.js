function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments);
  this.knownLanguage =  knownLanguage;
}

var johnSmith = new Developer("John", "Smith", "JavaScript");

console.log(johnSmith.name);				//result:	"John"
console.log(johnSmith.surname);				//result:	"Smith"
console.log(johnSmith.knownLanguage);		//result:	"JavaScript"

console.log(johnSmith instanceof Developer);//result:	true
console.log(johnSmith instanceof Person);	//result:	false
console.log(johnSmith instanceof Object);	//result:	true
