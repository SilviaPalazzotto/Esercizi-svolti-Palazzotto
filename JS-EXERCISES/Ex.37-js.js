const number = 15;

const promise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject("Il numero è minore o uguale a 10.");
  }
});

promise
  .then((result) => {
    console.log("Valore del numero:", result);
  })
  .catch((error) => {
    console.log("Errore:", error);
  });
