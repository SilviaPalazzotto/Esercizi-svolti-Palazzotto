async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
    const todo = await response.json();

    const container = document.getElementById('container');

    const h2Element = document.createElement('h2');
    h2Element.textContent = todo.title;

    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.checked = todo.completed;

    container.appendChild(h2Element);
    container.appendChild(checkboxElement);
  } catch (error) {
    console.log('Si è verificato un errore:', error);
  }
}

fetchTodo();
