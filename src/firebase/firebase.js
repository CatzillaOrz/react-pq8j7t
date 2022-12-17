import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  child,
  getDatabase,
  ref,
  set,
  get,
  remove,
  push,
  update,
} from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: process.env.FIREBASE_API_KEY,
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
console.log(firebaseConfig);

const db = getDatabase(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export default db;

// Initialize Realtime Database and get a reference to the service
//const database = getDatabase(app);

/**
function writeUserData(userId, name, email, imageUrl) {
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}

//writeUserData(uuid(), "Tom", "tom@gmail.com", "/public/images/avatar.jpeg");
//

const dbRef = ref(db);
const userId = "3c2872c1-c9ef-40fd-a9e2-85f3c2d25f50";
get(child(dbRef, `users/${userId}`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });

remove(ref(db, `users/${userId}`))
  .then((_) => {
    console.log("Deleted...");
  })
  .catch((error) => {
    console.error(error);
  });

function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture,
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), "posts")).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates["/posts/" + newPostKey] = postData;
  updates["/user-posts/" + uid + "/" + newPostKey] = postData;

  return update(ref(db), updates);
}

writeNewPost(
  "3c2872c1-c9ef-40fd-a9e2-85f3c2d25f50",
  "admin",
  "/images/default.jpeg",
  "HelloWordFirebase",
  "200"
);

push(ref(db, "posts"), {
  "ts-functions": {
    metrics: {
      views: 1200000,
      likes: 251000,
      shares: 1200,
    },
    title: "Why you should use TypeScript for writing Cloud Functions",
    author: "Doug",
  },
});
*/
