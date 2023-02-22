import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty, FirebaseReducer, useFirebase, useFirebaseConnect, } from 'react-redux-firebase';
import { GoogleAuthProvider, getAuth, signOut } from 'firebase/auth';
import { persistor, PersistState, store } from '../../store';
import { setLoginStatus } from './LoginSlice';
import { useAppSelector } from '../../hooks';
import { StyledFirebaseAuth } from 'react-firebaseui';


const LoginPage: React.FC = () => {
  const firebase = useFirebase()
  const auth = useSelector((state: PersistState) => state.firebase.auth)
  const status = useSelector((state: PersistState) => state.login.status)
  const uiConfig = useAppSelector(state => state.firebaseUIConfig)
  console.log(auth)
  console.log(status)
  const handleSignOut = (event: any) => {
    console.log("signing out");
    signOut(getAuth());
  }
  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' })
  }
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      store.dispatch(setLoginStatus(!!user))
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
    </div>)
}
export default LoginPage;