const isLogged = true;

const firstPromise = new Promise((resolve, reject) => {
  if (isLogged) {
    const randomNumber = Math.random();
    resolve(randomNumber);
  } else {
    reject("L'utente non è connesso.");
  }
});

const secondPromise = (inputNumber) => {
  return new Promise((resolve, reject) => {
    if (inputNumber > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject("Il numero è minore o uguale a 0.5.");
    }
  });
};

firstPromise
  .then((randomNumber) => {
    return secondPromise(randomNumber);
  })
  .then((data) => {
    console.log(data); 
  })
  .catch((error) => {
    console.log("Errore:", error);
  });
