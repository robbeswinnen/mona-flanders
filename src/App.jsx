import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MarketplacePage from './pages/MarketplacePage'
import HowItWorksPage from './pages/HowItWorksPage'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marktplaats" element={<MarketplacePage />} />
        <Route path="/hoe-het-werkt" element={<HowItWorksPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
