import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';
import './App.css';
import HomePage2 from './features/HomePage/HomePage2';
import HomePage from './features/HomePage/HomePage2';
import Button from '@mui/material/Button'
import { FormControl, Typography, Box, TextField, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Divider, CircularProgress } from '@mui/material';
import firebase from 'firebase/compat';
import { authIsReady, isLoaded, useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, Outlet, BrowserRouter as Router } from 'react-router-dom';
import { PersistState } from './store';
import { isEmpty } from 'react-redux-firebase';
import { Navigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import AboutPage from './features/AboutPage/AboutPage';
import NavBar from './features/NavBar/NavBar';
import UserDataDialog from './features/UserDataDialog/UserDataDialog';
import Footer from './features/NavBar/Footer';
import DashBoard from './features/DashBoard/DashBoard';
import { useAppSelector } from './hooks';


/**
 * Given a string, return true if it is a valid email.
 * @param {potentialEmail} string
 * @returns true if string is a valid email
 */
const validateEmail = (potentialEmail: string) => {
  // regex from https://www.w3resource.com/javascript/form/email-validation.php
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(potentialEmail))
}


const App = () => {
  const auth = useAppSelector((state) => state.firebase.auth)
  return (
    <>
      <UserDataDialog />
      <NavBar />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        {auth.uid ? 
          <Route path="/Dashboard" element={<DashBoard />} />
          :
          <Route path="/Dashboard" element={<HomePage />} />
        }
      </Routes>
    <Footer></Footer>
    </>

  );
}

export default App;
