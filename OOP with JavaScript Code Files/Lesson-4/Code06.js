function Developer(name, surname, knownLanguage) {
	Person.apply(this, arguments);
	this.knownLanguage =  knownLanguage;

}


Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

function Student(name, surname, subjectOfStudy) {
	Person.apply(this, arguments);
	this.subjectOfStudy = subjectOfStudy;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;



function DevStudent(name, surname, knownLanguage, subjectOfStudy) {
	Developer.call(this, name, surname, knownLanguage);
	Student.call(this, name, surname, subjectOfStudy);

}

DevStudent.prototype.writeCode = function() {
	console.log("writing code...");
	return {module: "..."};
};


var johnSmith = new DevStudent("John", "Smith", "C#", "JavaScript");

console.log(johnSmith instanceof Student);		//result: false
console.log(johnSmith instanceof Developer);		//result: false
console.log(johnSmith instanceof Person);		//result: false
