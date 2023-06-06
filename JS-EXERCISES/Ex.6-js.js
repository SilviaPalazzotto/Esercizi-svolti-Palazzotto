function printName() {
    var helloName = "Hello John";
  
    function inner() {
      return helloName;
    }
  
    return inner;
  }
  
  var closure = printName();
  console.log(closure()); 
  