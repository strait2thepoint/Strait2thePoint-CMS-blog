async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="blog-title"]').value;
    const body = document.querySelector('textarea[name="blog-body"]').value;
    // const url = document.querySelector('input[name="post-url"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body
        // url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);