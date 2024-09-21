import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Benefits from './components/Benefits.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <div className="h-full bg-gray-100">
        <div className="bg-black">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-1 lg:px-8">
            <div className="text-center text-white">
              FREE SHIPPING for orders over $300. Order today
            </div>
          </div>
        </div>
        <Navbar />
        <Home />
        <Benefits/>
        <Footer/>
      </div>
    </>
  )
}

export default App
