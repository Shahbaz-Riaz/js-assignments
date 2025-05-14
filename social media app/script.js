// Save Post Data to localStorage
document.addEventListener('DOMContentLoaded', () => {
  const postForm = document.getElementById('postForm');
  if (postForm) {
    postForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const title = document.getElementById('postTitle').value;
      const description = document.getElementById('postDescription').value;
      const fileInput = document.getElementById('postImageFile');
const file = fileInput.files[0];

if (file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    const image = e.target.result; // Base64 data URL

    const post = { title, description, image };
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    alert('Post Saved Successfully!');
    document.getElementById('postForm').reset();
  };
  reader.readAsDataURL(file);
} else {
  alert('Please select an image.');
}

      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(post);
      localStorage.setItem('posts', JSON.stringify(posts));

      alert('Post Saved Successfully!');
      this.reset();
    });
  }

  // Load Posts on posts.html
  const postsContainer = document.getElementById('postsContainer');
  if (postsContainer) {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (posts.length === 0) {
      postsContainer.innerHTML = "<p class='text-center'>No posts available.</p>";
    } else {
      posts.forEach(post => {
        const postCard = `
        <div class="col-md-4">
          <div class="card h-100 shadow-sm">
            <img src="${post.image}" class="card-img-top" alt="${post.title}">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-around">
              <i class="bi bi-hand-thumbs-up"></i>
              <i class="bi bi-share"></i>
              <i class="bi bi-chat"></i>
            </div>
          </div>
        </div>`;
        postsContainer.insertAdjacentHTML('beforeend', postCard);
      });
    }
  }
});
