import './App.css';
import HomePage from './features/HomePage/HomePage2';
import { Routes, Route,  } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import AboutPage from './features/AboutPage/AboutPage';
import NavBar from './features/NavBar/NavBar';
import UserDataDialog from './features/UserDataDialog/UserDataDialog';
import Footer from './features/NavBar/Footer';
import DashBoard from './features/DashBoard/DashBoard';
import { useAppSelector } from './hooks';




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
