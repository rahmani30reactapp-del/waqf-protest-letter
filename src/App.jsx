import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import Login from './components/Login'
import LetterForm from './components/LetterForm'
import PublicLetterForm from './components/PublicLetterForm'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [credential, setCredential] = useState(null)
  const [mode, setMode] = useState(null) // null = mode selection, 'login' = login mode, 'public' = public mode

  const handleLoginSuccess = (response) => {
    setCredential(response.credential)
    setUser(response.user)
  }

  const handleLogout = () => {
    setUser(null)
    setCredential(null)
    setMode(null) // Reset to mode selection
  }

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode)
    if (selectedMode === 'public') {
      setUser(null)
      setCredential(null)
    }
  }

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

  // Mode selection screen
  if (mode === null) {
    return (
      <div className="app">
        <div className="container">
          <header className="header">
            <h1>Waqf Protest Letter Generator</h1>
          </header>
          <div className="mode-selection">
            <h2>Choose Your Option</h2>
            <div className="mode-cards">
              <div className="mode-card" onClick={() => handleModeSelect('login')}>
                <div className="mode-icon">🔐</div>
                <h3>Login with Google</h3>
                <p>Use your Google account to send emails directly from your Gmail account</p>
                <ul className="mode-features">
                  <li>✓ Send emails from your verified Gmail account</li>
                  <li>✓ Uses Gmail API with OAuth</li>
                  <li>✓ More secure and reliable</li>
                </ul>
                <button className="mode-select-btn">Select</button>
              </div>
              <div className="mode-card" onClick={() => handleModeSelect('public')}>
                <div className="mode-icon">📝</div>
                <h3>Public (No Login)</h3>
                <p>Use without logging in - just enter your email address</p>
                <ul className="mode-features">
                  <li>✓ No login required</li>
                  <li>✓ Quick and easy to use</li>
                  <li>✓ Uses SMTP for email sending</li>
                </ul>
                <button className="mode-select-btn">Select</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Login mode - requires Google OAuth
  if (mode === 'login') {
    if (!googleClientId || googleClientId === 'your_google_client_id_here') {
      return (
        <div className="app">
          <div className="container">
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h2 style={{ color: '#ff4757', marginBottom: '20px' }}>Configuration Required</h2>
              <p style={{ marginBottom: '15px', fontSize: '16px' }}>
                Please set up your Google OAuth Client ID in the <code>.env</code> file.
              </p>
              <div style={{ 
                background: '#f8f9fa', 
                padding: '20px', 
                borderRadius: '8px', 
                textAlign: 'left',
                maxWidth: '600px',
                margin: '0 auto',
                marginTop: '20px'
              }}>
                <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Steps to fix:</p>
                <ol style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>Open the <code>.env</code> file in the root directory</li>
                  <li>Replace <code>your_google_client_id_here</code> with your actual Google Client ID</li>
                  <li>Get your Client ID from <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer">Google Cloud Console</a></li>
                  <li>Restart the development server (stop with Ctrl+C and run <code>npm start</code> again)</li>
                </ol>
                <p style={{ marginTop: '15px', fontSize: '14px', color: '#666' }}>
                  <strong>Note:</strong> Create React App requires you to restart the server after changing .env file.
                </p>
                <button 
                  onClick={() => setMode(null)} 
                  style={{ 
                    marginTop: '20px', 
                    padding: '10px 20px', 
                    background: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px', 
                    cursor: 'pointer' 
                  }}
                >
                  ← Back to Mode Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <GoogleOAuthProvider clientId={googleClientId}>
        <div className="app">
          <div className="container">
            <header className="header">
              <h1>Waqf Protest Letter Generator</h1>
              <button 
                onClick={() => setMode(null)} 
                className="back-btn"
                style={{ marginRight: '10px' }}
              >
                ← Change Mode
              </button>
              {user && (
                <div className="user-info">
                  <img
                    src={user.picture}
                    alt={user.name}
                    className="user-avatar"
                  />
                  <span>{user.name}</span>
                  <button onClick={handleLogout} className="logout-btn">
                    Logout
                  </button>
                </div>
              )}
            </header>

            {!user ? (
              <Login onSuccess={handleLoginSuccess} />
            ) : (
              <LetterForm user={user} credential={credential} />
            )}
          </div>
        </div>
      </GoogleOAuthProvider>
    )
  }

  // Public mode - no login required
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>Waqf Protest Letter Generator</h1>
          <button 
            onClick={() => setMode(null)} 
            className="back-btn"
          >
            ← Change Mode
          </button>
        </header>
        <PublicLetterForm />
      </div>
    </div>
  )
}

export default App

