import React, { useEffect, useContext } from 'react';  // add useContext
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { AuthContext } from '../App'; // import the context

const SignOutPage = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AuthContext); // access the context

  useEffect(() => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      setLoggedIn(false); // set isLoggedIn to false after sign-out
      navigate("/");  // redirect to the home page or login page
    }).catch((error) => {
      // An error happened.
      console.error('An error happened during sign-out:', error);
    });
  }, [setLoggedIn]);  // add setLoggedIn to the dependency array

  return (
    <div>
      Signing out...
    </div>
  );
};

export default SignOutPage;
