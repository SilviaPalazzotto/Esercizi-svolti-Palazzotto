const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
  const person2 = person1;
  
  person2.firstName = "Simon";
  
  console.log(person1);
  console.log(person2);

  //Quando assegniamo person1 a person2 utilizzando l'operatore (=), creaiamo un riferimento all'oggetto person1 esistente. Quindi così modifichiamo l'oggetto.

