const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#blog-title').value.trim();
    const body = document.querySelector('#blog-body').value.trim();
  
    if (id && title && body) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ id, title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/projects');//???
      } else {
        alert('Failed to create post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');//??
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-blog-title')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  