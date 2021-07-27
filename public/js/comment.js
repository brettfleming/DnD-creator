const createComment = async (event) => {
    event.preventDefault();
    console.log("hi");
    const comment_text = document.getElementById('comment').value.trim();
    const commentbtn = document.getElementById('commentbtn');
    const character_id =commentbtn.getAttribute('data-characterId');
    if (comment_text) {
        const response = await fetch('/api/comments/', {
          method: 'POST',
          body: JSON.stringify({ comment_text, character_id }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
        //   document.location.replace('/chracter/:id');
        } else {
          alert(response.statusText);
        }
      }
}

document
  .querySelector('#comment-form')
  .addEventListener('submit', createComment);