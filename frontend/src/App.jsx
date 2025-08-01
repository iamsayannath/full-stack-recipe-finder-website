
import Navbar from './components/Navbar';
import React from 'react';
import Givefeed from './pages/Givefeed';
import Getallrecipe from './pages/Getallrecipe';
import Contactus from './pages/Contactus';
import Notfound from './pages/Notfound';
import Recipedetails from './pages/Recipedetails';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Getallrecipe />} />
        <Route path="/givefeed" element={<Givefeed />} />
        <Route path="/getallrecipe" element={<Getallrecipe />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/recipedetails/:id" element={<Recipedetails />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;