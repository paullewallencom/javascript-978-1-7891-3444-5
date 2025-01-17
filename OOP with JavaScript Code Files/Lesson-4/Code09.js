var SoftwareHouse = (function() {

	function implementsMethod(obj, method) {
		return !!(obj && obj[method] && obj[method] instanceof Function);
	}

	function implementsProperty(obj, property) {
		return !!(obj && obj[property] && !(obj[property] instanceof Function))
	}

	return class {
		constructor() {
			this.employees = [];
		}

		hire(dev) {
			if (implementsMethod(dev, "writeCode") && implementsProperty(dev, "name")) {
				this.employees.push(dev);
			} else {
				throw new Error("The argument is not compatible with the required interface")
			}
		}
	};
});
