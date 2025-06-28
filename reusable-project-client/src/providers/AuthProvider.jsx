import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../components/utils/firebase";
import useAxiosPublic from "../components/hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic()
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const signInGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }
  const userUpdateProfile = (name, profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profile,
    });
  };
  const emailVerify = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  const resetPassword = (email) =>{
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }
  const signOutUser = () =>{
    setLoading(true)
    return signOut(auth)
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async(currentUser) => {
      console.log("current user --->", currentUser);
      if (currentUser?.email) {
        setUser(currentUser);
        const email = currentUser?.email
        await axiosPublic.post("/login", {email})
      } else {
        setUser(currentUser);
        await axiosPublic.get("/logout")
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const authInfo = {
    user,
    loading,
    signInUser,
    createUser,
    emailVerify,
    signOutUser,
    signInGoogle,
    resetPassword,
    userUpdateProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
