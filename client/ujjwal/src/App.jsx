import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from './Signup'
import Login from './login' 
import Home from './Home';

function App() {

  return (
    <Router>
    <React.StrictMode>
     <Routes>
     <Route path="/" element={<Signup />} />
     <Route path='/register' element={<Signup />} />
    <Route path='/login' element={<Login />}/>
    <Route path='/home' element={<Home />}/>
     </Routes>
     </React.StrictMode>
    </Router>
   
  )
}

export default App
