// [file name]: App.jsx (updated)
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Blockchain from './components/Blockchain/Blockchain'
import MRV from './components/MRV/MRV'
import Community from './components/Community/Community'
import Finances from './components/Finances/Finances'
import BSMCouncil from './components/BSMCouncil/BSMCouncil'
import DataEntry from './components/DataManagement/DataEntry'
import APIConnections from './components/DataManagement/APIConnections'
import DataManagement from './components/DataManagement/DataManagement'
import './styles/App.css'

// Navigation component to handle active states
function Navigation({ activeTab, setActiveTab }) {
  const location = useLocation()

  useEffect(() => {
    // Set active tab based on current route
    const path = location.pathname
    if (path === '/') setActiveTab('dashboard')
    else if (path === '/finances') setActiveTab('finances')
    else if (path === '/blockchain') setActiveTab('blockchain')
    else if (path === '/mrv') setActiveTab('mrv')
    else if (path === '/community') setActiveTab('community')
    else if (path === '/bsm-council') setActiveTab('bsm-council')
    else if (path === '/data-entry') setActiveTab('data-entry')
    else if (path === '/api-connections') setActiveTab('api-connections')
    else if (path === '/data-management') setActiveTab('data-management')
  }, [location.pathname, setActiveTab])

  return (
    <nav className="navigation">
      <Link 
        to="/" 
        className={activeTab === 'dashboard' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('dashboard')}
      >
        Dashboard
      </Link>
      <Link 
        to="/finances" 
        className={activeTab === 'finances' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('finances')}
      >
        Finances
      </Link>
      <Link 
        to="/blockchain" 
        className={activeTab === 'blockchain' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('blockchain')}
      >
        Blockchain
      </Link>
      <Link 
        to="/mrv" 
        className={activeTab === 'mrv' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('mrv')}
      >
        MRV Interface
      </Link>
      <Link 
        to="/community" 
        className={activeTab === 'community' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('community')}
      >
        Community
      </Link>
      <Link 
        to="/bsm-council" 
        className={activeTab === 'bsm-council' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('bsm-council')}
      >
        BSM Council
      </Link>
      <Link 
        to="/data-entry" 
        className={activeTab === 'data-entry' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('data-entry')}
      >
        Data Entry
      </Link>
      <Link 
        to="/api-connections" 
        className={activeTab === 'api-connections' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('api-connections')}
      >
        API Connections
      </Link>
      <Link 
        to="/data-management" 
        className={activeTab === 'data-management' ? 'nav-link active' : 'nav-link'}
        onClick={() => setActiveTab('data-management')}
      >
        Data Management
      </Link>
    </nav>
  )
}

// Header component
function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="app-header">
      <div className="header-content">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          <div>
            <h1>REDD+ GAMBIA MANGROVES</h1>
            <p className="platform-title">
              CONSERVATION AND RESTORATION OF THE MANGROVE ECOSYSTEM IN THE GAMBIA THROUGH THE REDD+ MECHANISM
            </p>
            <p className="platform-subtitle">Transparency & Data Management Platform</p>
          </div>
          <div style={{ textAlign: 'right', color: 'rgba(255, 255, 255, 0.9)' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '0.25rem' }}>
              {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
            <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>
              Live Data • Real-time Updates
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Footer component
function Footer() {
  return (
    <footer className="app-footer">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
        <p>
          © 2024 CONSERVATION AND RESTORATION OF THE MANGROVE ECOSYSTEM IN THE GAMBIA THROUGH THE REDD+ MECHANISM | 
          Built with Kora Carbon Methodology
        </p>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', opacity: 0.8 }}>
          <span>Sustainable Development</span>
          <span>Real-time Data</span>
          <span>Blockchain Secured</span>
        </div>
      </div>
    </footer>
  )
}

// Main App component
function App() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <Router>
      <div className="app">
        {/* Online Status Indicator */}
        {!isOnline && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#ef4444',
            color: 'white',
            textAlign: 'center',
            padding: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: '600',
            zIndex: 1000
          }}>
            You are currently offline. Some features may not be available.
          </div>
        )}

        {/* Header */}
        <Header />
        
        {/* Navigation */}
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/finances" element={<Finances />} />
            <Route path="/blockchain" element={<Blockchain />} />
            <Route path="/mrv" element={<MRV />} />
            <Route path="/community" element={<Community />} />
            <Route path="/bsm-council" element={<BSMCouncil />} />
            <Route path="/data-entry" element={<DataEntry />} />
            <Route path="/api-connections" element={<APIConnections />} />
            <Route path="/data-management" element={<DataManagement />} />
            
            {/* Fallback route for 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

// 404 Not Found component
function NotFound() {
  return (
    <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
      <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '1.1rem' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
        Return to Dashboard
      </Link>
    </div>
  )
}

export default App