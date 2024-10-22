function mixNamingWith(superclass) {
	return class extends superclass {
		getFullName() { 
			return this.name + " " + this.surname;
		}
  	}
}

class ExtendedPerson extends mixNamingWith(Person) { }

var johnSmith = new ExtendedPerson("John", "Smith");

console.log(johnSmith .getFullName());		//result: "John Smith"
