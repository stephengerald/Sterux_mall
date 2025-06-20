import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Cart from './pages/Cart.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Checkout from './pages/Checkout.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import VoiceScreenshot from './components/VoiceScreenshot.jsx'
import NewArrivals from './components/NewArrivals.jsx'
import Discounts from './components/Discounts.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <VoiceScreenshot />
      {/* Voice command screenshot component */}
      {/* This component listens for voice commands and takes screenshots */}
      <Navbar />
      <div className='pt-20 sm:pt-24'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />       <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/discounts" element={<Discounts />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
          {/* Catch-all route for 404 errors */}
        </Routes>
      </div>
      <Footer />
      {/* Footer component */}
      {/* This component contains the footer with links and copyright information */}
    </div>
    )
}

export default App