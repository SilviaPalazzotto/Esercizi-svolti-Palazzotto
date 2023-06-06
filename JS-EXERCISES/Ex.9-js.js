var person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  };
  
  var keys = Object.keys(person);
  
  keys.forEach(function (key) {
    console.log(key + ": " + person[key]);
  });
  