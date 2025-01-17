function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  
  Object.seal(this);
}

var person = new Person("John", "Smith");

console.log(delete person.name);   //result:    false
console.log(person.name);          //result:	"John"

if (!Object.isSealed(person)) {
  delete person.name;
}