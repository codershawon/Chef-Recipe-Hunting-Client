// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqaAWkC_gfwdCN5B75bk5UGs0nLLhZFbQ",
  authDomain: "chef-recipe-hunter-project.firebaseapp.com",
  projectId: "chef-recipe-hunter-project",
  storageBucket: "chef-recipe-hunter-project.appspot.com",
  messagingSenderId: "58855660924",
  appId: "1:58855660924:web:d92dc229bfbfefbe5858f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;