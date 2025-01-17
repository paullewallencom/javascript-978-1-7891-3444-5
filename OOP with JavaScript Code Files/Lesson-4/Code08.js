var  SoftwareHouse = (function() {

	function implement(obj, method) {
		return (obj && obj[method] && obj[method] instanceof Function);
	}

	return class {
		constructor() {
			this.employees = [];
		}

		hire(dev) {
			if (implement(dev, "writeCode")) {
				this.employees.push(dev);
			} else {
				throw new Error("The argument does not implement the writeCode method")
			}
		}
	};
})();
