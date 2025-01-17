var person = new Person("John", "Smith");

Object.freeze(person);

person.age = 32;
console.log(person.age);		//result: undefined

person.name = "Mario";
console.log(person.name);		//result: "John"

delete person.name;			//result: false
console.log(person.name);		//result: "John"

Object.defineProperty(
	person, 
	"name", { 
	    get: function() { 
			return "Mario"; 
	    }
	}
);
//result: exception

if (!Object.isFrozen(person)) {
  person.name = "Mario";
}
