var Person = (function() {
  function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function PersonConstructor(name, surname) {
	
    this.name = capitalize(name);
	
    this.surname = capitalize(surname);
  
  }

  return PersonConstructor;
}());