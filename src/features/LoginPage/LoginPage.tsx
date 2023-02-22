import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty, FirebaseReducer } from 'react-redux-firebase';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { GoogleAuthProvider} from 'firebase/auth';
import { persistor, PersistState, store } from '../../store';
import { setLoginStatus } from './LoginSlice';

const LoginPage: React.FC  = () => {
  const firebase = useFirebase()
  const auth = useSelector((state: PersistState) => state.firebase.auth)
  const status = useSelector((state: PersistState) => state.login);
  console.log(status)
  useEffect(() => {
    const unregisterAuthObserver = ((auth: FirebaseReducer.AuthState) => {
      if (isEmpty(auth)) {
        store.dispatch(setLoginStatus(true));
      } else {
        store.dispatch(setLoginStatus(false));
      }
    });
    return () => unregisterAuthObserver(auth); // cleanup toggles value, if unmounted
  }, []);
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
export default LoginPage;