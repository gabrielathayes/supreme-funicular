# My Blog (Firebase CMS)

This repo was migrated from Netlify CMS to a minimal Firebase-based setup:
- Admin: `/admin/` uses Firebase Auth (Google) and Firestore to create/edit posts
- Frontend lists posts from Firestore and renders individual posts with Markdown

## Setup

1) Create a Firebase project at https://console.firebase.google.com
2) In Project settings → Your apps → Web app, get the SDK configuration
3) Edit `assets/firebase.js` and replace the placeholder `firebaseConfig`
4) Firestore: Create a database in Native mode. Security rules (basic example below).
5) Authentication: Enable the Google provider.

### Firestore structure
Collection: `posts` (documents)
- title: string
- slug: string
- date: timestamp (or ISO string)
- body: string (Markdown)
- createdAt: timestamp
- updatedAt: timestamp

### Simple development rules (restrict writes to authenticated users)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
      allow read: if true; // public read
      allow write: if request.auth != null; // only authenticated users can write
    }
  }
}
```

## Local preview
You can use any static server. If you use Firebase Hosting:

- Install the CLI and initialize hosting in this folder.
- Deploy or run locally with `firebase emulators:start`.

## Notes
- The legacy `admin/config.yml` and Netlify CMS script were removed.
- The list page (`index.html`) fetches posts from Firestore using `assets/load-posts.js`.
- The post view (`post.html`) fetches a single document by id.
