import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid: uid,
});

export const logout = (uid) => ({
  type: "LOGOUT",
});

export const startLogin = () => {
  return signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // The email of the user's account used.
      //const email = error.customData.email;
      //console.log(email);
      // The AuthCredential type that was used.
      //const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const startLogout = () => {
  return signOut(auth)
    .then(() => {
      console.log("signOut success");
    })
    .catch((err) => {
      console.log(err);
    });
};
