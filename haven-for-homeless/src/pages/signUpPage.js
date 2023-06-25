import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const SignOutButton = () => {
  const navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      navigate("/");  // redirect to the home page or login page
    }).catch((error) => {
      // An error happened.
      console.error('An error happened during sign-out:', error);
    });
  };

  return (
    <span className="ml-auto">
      <Link className="btn btn-light action-button" onClick={signOutUser} to="/">Sign Out</Link>
    </span>
  );
}

export default SignOutButton;
