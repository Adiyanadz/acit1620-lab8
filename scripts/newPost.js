/** COMPLETE THIS PART */
async function addPost(post) {
    // Retrieve posts from local storage or initialize to an empty array if not found
    let posts = JSON.parse(localStorage.getItem('posts')) || [];

    //new post to the front of the list
    posts.unshift(post);

    // Save the updated list of posts back to local storage
    localStorage.setItem('posts', JSON.stringify(posts));
}



document.querySelector('#new-post').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    addPost({title, body});
    e.target.reset();
});