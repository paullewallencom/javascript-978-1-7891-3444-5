class Developer {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}
}

class Salesman {
	constructor(name, surname) {
		this.firstName = name;
		this.secondName = surname;
	}
}

class BusinessAnalyst {
	constructor(fullName) {
		this.fullName = fullNname;
	}
}


class SoftwareHouse {
	constructor() {
		this.employees = [];
	}

	listEmployees() {
		var employeesLen = this.employees.length;
		var currentEmployee;

		for(var i = 0; i < employeesLen; i++) {
			currentEmployee =  this.employees[i];

			if (currentEmployee instanceof Developer) {
				console.log(currentEmployee.name + " " + currentEmployee.surname);
			} else if (currentEmployee instanceof Salesman) {
				console.log(currentEmployee.firstName + " " + currentEmployee.secondName);
			} else if (currentEmployee instanceof BusinessAnalyst) {
				console.log(currentEmployee.fullName);
			}
		}
	}
}