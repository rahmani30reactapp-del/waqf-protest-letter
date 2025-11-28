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
            <div className="mode-intro">
              <h2>How would you like to proceed?</h2>
              <p className="mode-intro-text">
                Choose the option that best fits your needs. Both options allow you to create, download, and send your protest letter.
              </p>
            </div>
            <div className="mode-cards">
              <div className="mode-card" onClick={() => handleModeSelect('login')}>
                <div className="mode-badge">Recommended</div>
                <div className="mode-icon">🔐</div>
                <h3>Login with Google</h3>
                <p className="mode-description">
                  Sign in with your Google account to send emails directly from your verified Gmail account. 
                  Your email will appear to be sent from your own Gmail address.
                </p>
                <div className="mode-details">
                  <h4>How it works:</h4>
                  <ul className="mode-features">
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">Sign in with your Google account (one-time setup)</span>
                    </li>
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">Emails sent directly from your Gmail account</span>
                    </li>
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">Uses Gmail API with secure OAuth authentication</span>
                    </li>
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">No additional email configuration needed</span>
                    </li>
                  </ul>
                </div>
                <button className="mode-select-btn" onClick={(e) => { e.stopPropagation(); handleModeSelect('login'); }}>
                  Continue with Google
                </button>
              </div>
              <div className="mode-card" onClick={() => handleModeSelect('public')}>
                <div className="mode-badge">Quick Access</div>
                <div className="mode-icon">📝</div>
                <h3>No Login Required</h3>
                <p className="mode-description">
                  Use the letter generator without logging in. Simply enter your email address and use the 
                  "Compose" button to open your email client with pre-filled content.
                </p>
                <div className="mode-details">
                  <h4>How it works:</h4>
                  <ul className="mode-features">
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">No account login required - start immediately</span>
                    </li>
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">Enter your email address once</span>
                    </li>
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">Download PDF or use "Compose" to open your email client</span>
                    </li>
                    <li>
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">Email body copied to clipboard automatically</span>
                    </li>
                  </ul>
                </div>
                <button className="mode-select-btn" onClick={(e) => { e.stopPropagation(); handleModeSelect('public'); }}>
                  Continue Without Login
                </button>
              </div>
            </div>
            <div className="mode-footer">
              <p className="mode-footer-text">
                <strong>Note:</strong> Both options provide the same letter generation features and functionality. 
                The primary difference is the email sending method - Login with Google sends emails directly via Gmail API from your verified account, while No Login Required opens your email client with pre-filled content for you to send manually.
              </p>
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

