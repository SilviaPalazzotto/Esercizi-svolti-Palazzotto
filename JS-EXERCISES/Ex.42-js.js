async function createPost() {
  try {
    const form = document.getElementById('postForm');
    const title = form.title.value;
    const completed = form.completed.checked;

    const postData = {
      title: title,
      completed: completed
    };

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    if (response.ok) {
      const post = await response.json();
      console.log('Post creato con successo:', post);
    } else {
      console.log('Si è verificato un errore durante la creazione del post.');
    }
  } catch (error) {
    console.log('Si è verificato un errore:', error);
  }
}

const form = document.getElementById('postForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  createPost();
});
