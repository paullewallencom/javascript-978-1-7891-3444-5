function Person() {
	this.name = "";
	this.surname = "";
}

function Programmer() {
	this.knownLanguage = "";
}

Programmer.prototype = new Person();

function writeFullName(p) {
	console.log(p.name + " " + p.surname);
}

var a = new Person();
a.name = "John";
a.surname = "Smith";

var b = new Programmer();
b.name = "Mario";
b.surname = "Rossi";
b.knownLanguage = "JavaScript";

writeFullName(a);	//result: John Smith
writeFullName(b);	//result: Mario Rossi
