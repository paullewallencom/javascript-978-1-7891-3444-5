var Person = (function() {
  var priv = new WeakMap();
  var _= function(instance) {return priv.get(instance);};

  function PersonConstructor() {
    var privateMembers = { email: "" };
    priv.set(this, privateMembers);
    this.name = "";
    this.surname = "";
  }

  Object.defineProperty(
    PersonConstructor.prototype,
    "fullName",
    {
      get: function() { return this.name + " " + this.surname;}
    });

    Object.defineProperty(
      PersonConstructor.prototype,
      "email",
      {
        get: function() { return _(this).email; },
        set: function(value) {
          var emailRegExp = /\w+@\w+\.\w{2,4}/i;
          if (emailRegExp.test(value)) {
            _(this).email = value;
          } else {
            throw new Error("Invalid email address!");
          }
        }
      }
    );

  return  PersonConstructor;

}());

