import React from 'react';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Login/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
