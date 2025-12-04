import React from 'react'

import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Services from './pages/Services'
import About from './pages/About'
import Delivery from './pages/Delivery'
import Reviews from './pages/Reviews'
import Training from './pages/Training'
import Contacts from './pages/Contacts'
import Wholesale from './pages/Wholesale'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/wholesale" element={<Wholesale />} />
      </Routes>
    </div>
  )
}

export default App