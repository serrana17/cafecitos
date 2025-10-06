import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import Profiles from './components/Profiles'
import NearMe from './components/NearMe'
import CTA from './components/CTA'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Profiles />
      <NearMe />
      <CTA />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App