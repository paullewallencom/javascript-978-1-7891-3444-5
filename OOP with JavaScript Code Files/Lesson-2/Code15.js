var Person = (function() {

  function PersonConstructor() {
    var _email = "";

    this.name = ""; 
    this.surname = "";

    Object.defineProperty(
      this,
      "fullName",
      {
        get: function() { return this.name + " " + this.surname;},
        set: function(value) {
          var parts = value.toString().split(" ");
          this.name = parts[0] || "";
          this.surname = parts[1] || "";
        }
      }
    );




    Object.defineProperty(
      this,
      "email",
      {
        get: function() { return _email; },
        set: function(value) {
          var emailRegExp = /\w+@\w+\.\w{2,4}/i;
          if (emailRegExp.test(value)) {
            _email = value;
          } else {
            throw new Error("Invalid email address!");
          }
        }
      }
    );
  }
  return  PersonConstructor;
}());


var p = new Person();

p.email = "john.smith";		//throws exception
