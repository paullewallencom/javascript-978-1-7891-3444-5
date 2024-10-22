var  Person = (function() {
  "use strict";
  var priv = new WeakMap();
  var _= function(instance) {return priv.get(instance);};

  class PersonClass {
    constructor() {
      var privateMembers = { email: "" };
      priv.set(this, privateMembers);
      this.name = "";
      this.surname = "";
    }

    get fullName() { 
      return this.name + " " + this.surname;
    }

    get email() { 
      return _(this).email;
    }

    set email(value) {
      var emailRegExp = /\w+@\w+\.\w{2,4}/i;

      if (emailRegExp.test(value)) {
        _(this).email = value; 
      } else { 
        throw new Error("Invalid email address!");
      }
    }
  }

  return  PersonClass;

}());
