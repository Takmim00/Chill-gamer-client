import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const authContext = createContext();
const AuthProvider = ({ routes }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState( JSON.parse(localStorage.getItem("user")) || null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);

      return () => {
        unsubscribe();
      };
    });
  }, []);
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleGithubLogin = () =>{

      signInWithPopup(auth, githubProvider)
  }

  const authInfo = {
    user,
    setUser,
    createNewUser,
    logout,
    userLogin,
    loading,
    handleGoogleLogin,
    handleGithubLogin
  };

  return (
    <div>
      <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
