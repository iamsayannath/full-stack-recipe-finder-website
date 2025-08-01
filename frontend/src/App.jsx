
import Navbar from './components/Navbar';
import React from 'react';
import Givefeed from './pages/Givefeed';
import Getallrecipe from './pages/Getallrecipe';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Recipedetails from './pages/Recipedetails';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/givefeed" element={<Givefeed />} />
        <Route path="/getallrecipe" element={<Getallrecipe />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/recipedetails/:id" element={<Recipedetails />} />
      </Routes>
    </div>
  );
}

export default App;