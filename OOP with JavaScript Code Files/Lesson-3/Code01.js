var person = {name: "John", surname: "Smith"};
var developer = Object.create(person, { 
  knownLanguage: { 
	writable: true,
	configurable: true,
	value: "JavaScript"
  }
});
