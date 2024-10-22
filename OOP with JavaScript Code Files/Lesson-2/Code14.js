var  Person = (function() {

  function PersonConstructor() {
	this.name = "";
	this.surname = "";
	this.email = "";

	Object.defineProperty(
		this, 
		"fullName",
		{
		  get: function() { 
		    return this.name + " " + this.surname;},
		  set: function(value) { 
			var parts = value.toString().split(" ");
			this.name = parts[0] || "";
			this.surname = parts[1] || "";
		}
   });
  }

  return  PersonConstructor;
	
}());