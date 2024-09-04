import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

Routes
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element = {<Home />}/>
        <Route  path='/portfolio' element = {<Portfolio />}/>
        <Route  path='/contact' element = {<Contact />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
