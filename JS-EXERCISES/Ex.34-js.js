function printAsyncName(callback, name) {
    setTimeout(function() {
      callback();
      setTimeout(function() {
        console.log(name);
      }, 2000);
    }, 1000);
  }
  
  function printHello() {
    console.log("Hello");
  }
  
  printAsyncName(printHello, "John");
  