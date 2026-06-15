import './App.css'
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop/Shop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
