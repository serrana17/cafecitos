import React, { useState } from 'react'
import './../App.css' // Import App.css for global styles

const Footer = () => {
  const [showEmails, setShowEmails] = useState(false)
  const [emails, setEmails] = useState([])

  const handleViewEmails = () => {
    const savedEmails = JSON.parse(localStorage.getItem('newsletter_emails') || '[]')
    setEmails(savedEmails)
    setShowEmails(true)
  }

  const handleCloseEmails = () => {
    setShowEmails(false)
  }

  const handleClearEmails = () => {
    if (confirm('¿Estás seguro de que quieres eliminar todos los emails?')) {
      localStorage.removeItem('newsletter_emails')
      setEmails([])
      alert('Todos los emails han sido eliminados.')
    }
  }

  if (showEmails) {
    return (
      <div className="emails-modal">
        <div className="emails-content">
          <div className="emails-header">
            <h3>📧 Emails Suscritos ({emails.length})</h3>
            <button className="btn-close" onClick={handleCloseEmails}>✕</button>
          </div>
          <div className="emails-list">
            {emails.length === 0 ? (
              <p>No hay emails suscritos aún.</p>
            ) : (
              emails.map((email, index) => (
                <div key={index} className="email-item">
                  <span className="email-number">{index + 1}</span>
                  <span className="email-address">{email}</span>
                </div>
              ))
            )}
          </div>
          <div className="emails-actions">
            <button className="btn-clear" onClick={handleClearEmails}>
              🗑️ Limpiar Lista
            </button>
            <button className="btn-close" onClick={handleCloseEmails}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h4>Cafecitos<span className="dot">.</span></h4>
            <p>Más que un café, una experiencia</p>
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacidad</a>
            <a href="#terms">Términos</a>
            <a href="#support">Soporte</a>
            <button className="btn-view-emails" onClick={handleViewEmails}>
              📧 Ver Emails
            </button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Cafecitos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer