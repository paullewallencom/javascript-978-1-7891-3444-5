var myMap = new WeakMap();

var johnSmith = {name: "John", surname: "Smith"};
var marioRossi = {name: "Mario", surname: "Rossi"};

myMap.set(johnSmith, "This is John"); 
myMap.set(marioRossi, "This is Mario"); 

console.log(myMap.get(marioRossi));