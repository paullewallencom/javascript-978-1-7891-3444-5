function Person(name, surname) {
	this.name = name;
	this.surname;
}

var johnSmith = new Person("John", "Smith");

console.log(johnSmith instanceof Person);		//result:	true

class SoftwareHouse {
	constructor() {
		this.employees = [];
	}

	hire(dev) {
		if (dev instanceof Person) {
				this.employees.push(dev);
		} else {
			throw new Error("This software house only hires people!");
		}
	}
}

var johnSmith = new Person("John", "Smith");
var lassie = {name: "Lassie", breed: "Collie"};
var table = {type: "round", legsNumber: 1};

var swHouse = new SoftwareHouse();

swHouse.hire(johnSmith);		
swHouse.hire(lassie);		//result:	Error
swHouse.hire(table);		//result:	Error
