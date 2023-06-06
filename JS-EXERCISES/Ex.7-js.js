function printName() {
    var helloName = "Hello John";
  
    function inner() {
      return helloName;
    }
  
    return inner;
  }
  
  var closure = printName();
  
  setTimeout(function () {
    console.log(closure()); 
  }, 1000);
  