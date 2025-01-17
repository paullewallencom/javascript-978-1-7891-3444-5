var Person = (function() {
  var protectedMembers;
  
  function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function PersonConstructor(name, surname, protected) {

	protectedMembers = protected || {};

	protectedMembers.capitalize = capitalize;  

	this.name = capitalize(name);
	this.surname = capitalize(surname);
  }

  return PersonConstructor;
}());


function Developer(name, surname, knownLanguage) {
  var parentProtected = {};
	
  Person.call(this, name, surname, parentProtected);
	
  this.knownLanguage = parentProtected.capitalize(knownLanguage);
}

