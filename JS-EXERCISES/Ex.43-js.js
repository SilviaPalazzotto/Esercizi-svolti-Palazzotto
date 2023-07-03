const user = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  function saveUserToLocalStorage() {
    const userJson = JSON.stringify(user);
    localStorage.setItem('user', userJson);
  }
  
  saveUserToLocalStorage();
  