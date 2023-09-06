import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './Components/Blue'
import Red from './Components/Red'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import ContactUs from './Components/ContactUs'
import Daniel from './Components/Daniel'

function App() 
{
  return (

    <div id="main-section">
      <nav>
        <NavBar/>
      </nav>
      <Routes>
        <Route path="/blue" element={<Blue/>}/>
        <Route path="/red" element={<Red/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/NavBar" element={<NavBar/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/Daniel" element={<Daniel/>}/>
      </Routes>
    </div>
  )
}

export default App
