async function fetchTodos() {
  try {
    const response = await fetch('https://example.com/todos'); // Sostituisci con il link effettivo per ottenere i Todos
    const todos = await response.json();

    const todoListElement = document.querySelector('.todo-list');

    todos.forEach((todo) => {
      const liElement = document.createElement('li');
      liElement.textContent = todo.title;
      todoListElement.appendChild(liElement);
    });
  } catch (error) {
    console.log('Si è verificato un errore:', error);
  }
}

fetchTodos();
