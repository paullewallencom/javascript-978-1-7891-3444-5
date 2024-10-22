var ITeamLeadership = new Interface("ITeamLeadership", ["delegateTo", "motivate"], ["team"]);

class SoftwareHouse {
	constructor() {
		this.employees = [];
	}

	hire(dev) {
		IHireable.isImplementedBy(dev);
		ITeamLeadership.isImplementedBy(dev);
		this.employees.push(dev);
	}
}

var johnSmith = {
	name: "John", 
	surname: "Smith", 
	writeCode: function() {/*...*/}, 
	delegateTo: function() {/*...*/}, 
	motivate: function() {/*...*/},
	team: []};

var swHouse = new SoftwareHouse();

swHouse.hire(johnSmith);

console.log(swHouse.employees.indexOf(johnSmith));	//result:	0
