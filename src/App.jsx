import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Gallery from './components/Gallery'
import Modal from './components/Modal'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/gallery/:id" element={<Modal />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
