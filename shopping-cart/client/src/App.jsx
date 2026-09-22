import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Body from './components/body'

const App = () => {
  return (
  <div>
      <BrowserRouter>
        <Header/>
        <Navbar/>
      
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>

        
        
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App