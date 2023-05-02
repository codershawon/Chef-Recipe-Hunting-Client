import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebaseConfig";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    // setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle=()=>{
    return signInWithPopup(auth,googleProvider)
}
  const signInWithGitHub=()=>{
    return signInWithPopup(auth,gitHubProvider)
}
  const logout = () => {
    // setLoading(true)
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Logged in user in auth observer", currentUser);
      setUser(currentUser);
      //   setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    createUser,
    createUser,
    signInUser,
    signInWithGoogle,
    signInWithGitHub,
    logout
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;