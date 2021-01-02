//Person class has been declared in the previous code

var greeting = "Good morning";
 
function greets(person) {
  var fullName = person.name + " " + person.surname;
  function displayGreeting() { 
    console.log(greeting + " " + fullName);
  }
  displayGreeting();
}
 
greets({name: "John", surname: "Smith"});