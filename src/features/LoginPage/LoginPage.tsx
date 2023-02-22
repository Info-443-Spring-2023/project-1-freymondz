import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty, FirebaseReducer, useFirebase, } from 'react-redux-firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';
import {GoogleAuthProvider, getAuth, signOut} from 'firebase/auth';
import { persistor, PersistState, store } from '../../store';
import { setLoginStatus } from './LoginSlice';

const LoginPage: React.FC  = () => {
  const firebase = useFirebase()
  const auth = useSelector((state: PersistState) => state.firebase.auth)
  const handleSignOut = (event: any) => {
    console.log("signing out");
    signOut(getAuth());
  }
  if(isEmpty(auth)) {
    return (
      <div>
        <StyledFirebaseAuth
          uiConfig={{
            signInFlow: 'popup',
            signInSuccessUrl: '/',
            signInOptions: [GoogleAuthProvider.PROVIDER_ID],
            callbacks: {
              signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                return false;
              },
            },
          }}
          firebaseAuth={firebase.auth()}
        />
      </div>)
  }
  return <button className="btn btn-secondary ms-2" onClick={handleSignOut}>Sign Out</button>
}
export default LoginPage;