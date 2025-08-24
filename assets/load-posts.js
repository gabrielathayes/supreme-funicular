// Load posts from Firebase Firestore and list them.
import { db } from './firebase.js';
import { collection, getDocs, orderBy, query } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const ul = document.getElementById('posts-list');

async function load() {
  ul.innerHTML = '<li>Loading…</li>';
  try {
    const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
    const snap = await getDocs(q);
    ul.innerHTML = '';
    if (snap.empty) {
      ul.innerHTML = '<li>No posts yet.</li>';
      return;
    }
    snap.forEach(d => {
      const p = d.data();
      const title = p.title || 'Untitled';
      const dateStr = p.date?.toDate ? p.date.toDate().toISOString().slice(0,10) : (p.date || '');
      const li = document.createElement('li');
      li.innerHTML = `<a href="post.html?id=${d.id}">${title}</a> - ${dateStr}`;
      ul.appendChild(li);
    });
  } catch (e) {
    console.error(e);
    ul.innerHTML = '<li>Failed to load posts.</li>';
  }
}

load();
