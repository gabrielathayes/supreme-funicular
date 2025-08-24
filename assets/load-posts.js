fetch('src/posts/posts.json')
  .then(res => res.json())
  .then(posts => {
    const ul = document.getElementById('posts-list');
    posts.forEach(post => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="\${post.file_path}">\${post.title}</a> - \${post.date}`;
      ul.appendChild(li);
    });
  });