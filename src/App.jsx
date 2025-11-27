import { GoogleOAuthProvider } from '@react-oauth/google'
import { useState } from 'react'
import Login from './components/Login'
import LetterForm from './components/LetterForm'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [credential, setCredential] = useState(null)

  const handleLoginSuccess = (response) => {
    setCredential(response.credential)
    setUser(response.user)
  }

  const handleLogout = () => {
    setUser(null)
    setCredential(null)
  }

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

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

export default App

