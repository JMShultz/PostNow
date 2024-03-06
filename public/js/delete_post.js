async function deleteForm(event) {
    event.preventDefault();

    const ID = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
      
      const response = await fetch(`/api/posts/${ID}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: ID
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/');
      } else {
        alert(response.statusText);
      }
      
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteForm);