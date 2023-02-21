import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

// Import the functions you need from the SDKs you need
import { Provider } from 'react-redux';
import { store } from './store';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzmolqh8q8BBGWrZKBoxW-sOjCa6Uihzg",
  authDomain: "future5-7a3d2.firebaseapp.com",
  projectId: "future5-7a3d2",
  storageBucket: "future5-7a3d2.appspot.com",
  messagingSenderId: "437088556082",
  appId: "1:437088556082:web:ba572c17fd9b1d4200182b"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
  
firebase.initializeApp(firebaseConfig)


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

const rrfConfig = {
  userProfile: 'users'
}



const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}


ReactDOM.render(                    
  <React.StrictMode>
    {/* <CssBaseline /> */}
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function configureStore(arg0: { reducer: any; }) {
  throw new Error('Function not implemented.');
}

