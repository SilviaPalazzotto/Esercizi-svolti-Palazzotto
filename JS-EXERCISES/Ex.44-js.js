function getUserFromLocalStorage() {
    const userJson = localStorage.getItem('user');
    const user = JSON.parse(userJson);
    return user;
  }
  
  const user = getUserFromLocalStorage();
  console.log(user);
  