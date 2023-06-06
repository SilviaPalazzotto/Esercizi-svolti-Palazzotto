function multiplyByTwo(number) {
    function inner(param) {
      return param * number;
    }
  
    return inner;
  }
  
  var closure = multiplyByTwo(4);
  console.log(closure()); 
  