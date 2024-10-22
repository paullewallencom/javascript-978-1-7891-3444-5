var person = { 
  name: "John", 
  surname: "Smith",
  get fullName() { return this.name + " " + this.surname; },
  set fullName(value) {
	var parts = value.toString().split(" ");
	this.name = parts[0] || "";
	this.surname = parts[1] || "";
  },
  email: "john.smith@packtpub.com"
};

console.log(person.fullName); //John Smith
person.fullName = "Mario Rossi";
console.log(person.name); 	//Mario
console.log(person.surname); 	//Rossi
console.log(person.fullName); 	//Mario Rossi