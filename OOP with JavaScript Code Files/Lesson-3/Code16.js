function Developer(name, surname, knownLanguage) {
  Person.apply(this, arguments);
  this.knownLanguage =  knownLanguage;
}

function Student(name, surname, subjectOfStudy) {
  Person.apply(this, arguments);
  this.subjectOfStudy =  subjectOfStudy;
}

function DevStudent(name, surname, knownLanguage, subjectOfStudy) {
  Developer.call(this, name, surname, knownLanguage);
  Student.call(this, name, surname, subjectOfStudy);
}

var johnSmith = new DevStudent("John", "Smith", "C#", "JavaScript");

console.log(johnSmith.knownLanguage);		//result: C#
console.log(johnSmith.subjectOfStudy);		//result: JavaScript
