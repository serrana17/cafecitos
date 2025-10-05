import React from 'react'

const Footer = () => {
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