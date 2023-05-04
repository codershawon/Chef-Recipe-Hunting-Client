import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName,
      photoURL
    );
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Logged in user in auth observer", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const updateUserProfile = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };
  const authInfo = {
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    signInWithGitHub,
    logout,
    loading,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
