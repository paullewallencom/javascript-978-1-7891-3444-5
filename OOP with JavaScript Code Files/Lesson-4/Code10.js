Object.prototype.implementsMethod = function(method) {
	return !!(this[method] && this[method] instanceof Function)
};

Object.prototype.implementsProperty = function(property) {
	return !!(this[property] && !(this[property] instanceof Function))
};

var johnSmith = {name: "John", surname: "Smith", writeCode: function() {/*...*/}};

johnSmith.implementsMethod("name");		//result: true
johnSmith.implementsMethod("writeCode");	//result: true
johnSmith.implementsMethod("writePoems");	//result: false


class SoftwareHouse {
	constructor() {
		this.employees = [];
	}

	hire(dev) {
		if (dev.implementsMethod("writeCode") && dev.implementsProperty("name")) {
			this.employees.push(dev);
		} else {		
			throw new Error("The argument is not compatible with the required interface");
		}
	}
}
