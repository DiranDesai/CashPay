import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
