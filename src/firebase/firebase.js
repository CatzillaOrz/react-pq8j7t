import uuid from "uuid";
import { initializeApp } from "firebase/app";
import { child, getDatabase, ref, set, get } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://expensify-5ad85-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
// Initialize Realtime Database and get a reference to the service
//const database = getDatabase(app);

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
