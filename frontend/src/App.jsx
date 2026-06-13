import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
