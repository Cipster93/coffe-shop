import React, { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomeView from './pages/HomeView'
import MenuView from './pages/MenuView'
import ContactView from './pages/ContactView'
import HeaderNavigation from './components/homeComponents/HeaderNavigation'
import Lottie from 'lottie-react'
import CoffeeAnimation from '../public/Coffee.json'
import PageWrapper from './components/PageWrapper'
import './App.css'
import ScrollToTop from './utils/ScrollToTop'

function AppContent() {
  const location = useLocation()

  return (
    <>
      <HeaderNavigation />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomeView /></PageWrapper>} />
        <Route path="/menu" element={<PageWrapper><MenuView /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactView /></PageWrapper>} />
      </Routes>
    </>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const lottieRef = useRef()

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.4)
    }

    const timer = setTimeout(() => setIsLoading(false), 4000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="loading-screen">
        <Lottie
          lottieRef={lottieRef}
          animationData={CoffeeAnimation}
          style={{ width: '100vw', height: '100vh', filter: 'invert(1) brightness(1.2)' }}
          loop
          autoplay
        />
      </div>
    )
  }

  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App
