import { initializeApp } from "firebase/app";
import * as expenssActions from "../actions/expenses";

const firebaseConfig = {
  apiKey: "AIzaSyAdxG8rbixjz8QA7FZLB4FyJ21x9umaGBk",
  authDomain: "expensify-5ad85.firebaseapp.com",
  projectId: "expensify-5ad85",
  storageBucket: "expensify-5ad85.appspot.com",
  messagingSenderId: "845594625540",
  appId: "1:845594625540:web:f0a49634caf779c1ea9751",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
